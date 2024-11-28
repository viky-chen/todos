import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { PasswordUtils } from './utils';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(name: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.validateUser(name, pass);

    if (!user) {
      throw new UnauthorizedException({
        code: 401,
        message: '用户名或密码错误',
      });
    }
    const payload = { sub: user.id, id: user.id, username: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async validateUser(
    username: string,
    pass: string,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.usersService.findOneByName(username);
    if (!user || pass !== user.password) {
      return null;
    }
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
  }

  async register(createUserDto: any) {
    if (await this.usersService.findOneByName(createUserDto.name)) {
      throw new HttpException(
        {
          code: 400,
          message: '用户名已存在',
        },
        400,
        {
          cause: new Error(),
        },
      );
    }
    return await this.usersService.create(createUserDto);
  }
}

import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { RedisCacheService } from 'src/common/redis-cache.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private readonly redisCacheService: RedisCacheService,
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
    const access_token = await this.jwtService.signAsync(payload);
    this.redisCacheService.set(
      `user/access_token/${user.id}`,
      access_token,
      60 * 60 * 24,
    );
    return {
      access_token,
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _, ...result } = user;
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

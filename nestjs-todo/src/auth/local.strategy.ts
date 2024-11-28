import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log('LocalStrategy');
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException({
        code: 401,
        message: '用户名或密码错误',
      });
    }
    return user;
  }
}

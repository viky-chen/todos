import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { ApiExtraModels, ApiOkResponse, ApiProperty } from '@nestjs/swagger';
class LoginResponse {
  @ApiProperty()
  access_token: string;
}

class RegisterResponse extends CreateUserDto {}
@ApiExtraModels(LoginUserDto)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOkResponse({ type: LoginResponse })
  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.signIn(loginUserDto.name, loginUserDto.password);
  }

  @ApiOkResponse({ type: RegisterResponse })
  @Post('logout')
  logout() {
    // return this.authService.signIn(loginUserDto.name, loginUserDto.password);
    return 'logout';
  }

  @ApiOkResponse({ type: RegisterResponse })
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../user/entities/user.entity';

export class LoginUserDto implements Omit<User, 'id' | 'isActive'> {
  @ApiProperty()
  name: string;
  @ApiProperty()
  password: string;
}

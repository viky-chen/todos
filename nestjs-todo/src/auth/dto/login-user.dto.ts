import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../user/entities/user.entity';

export class LoginUserDto implements Omit<User, 'id' | 'isActive'> {
  @ApiProperty({
    default: 'viky',
  })
  name: string;
  @ApiProperty({
    default: '123456',
  })
  password: string;
}

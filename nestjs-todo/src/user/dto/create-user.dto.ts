import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class CreateUserDto implements Omit<User, 'id' | 'isActive'> {
  tasks?: String[];
  @ApiProperty({ required: false, description: '是否激活' })
  isActive?: boolean = true;
  @ApiProperty()
  name: string;
  @ApiProperty()
  password: string;
}

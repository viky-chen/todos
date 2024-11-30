import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class CreateUserDto implements Omit<User, 'id' | 'isActive'> {
  tasks?: string[];
  @ApiProperty({ required: false, description: '是否激活' })
  isActive?: boolean = true;
  @ApiProperty({
    default: 'viky',
  })
  name: string;
  @ApiProperty({
    default: '123456',
  })
  password: string;
}

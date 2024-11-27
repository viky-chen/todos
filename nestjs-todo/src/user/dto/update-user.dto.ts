import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    required: false,
    description: 'User is active or not',
  })
  isActive? = true;
  @ApiProperty({ required: false })
  name?: string;
}

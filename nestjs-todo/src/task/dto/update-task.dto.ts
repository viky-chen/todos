import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({
    required: false,
  })
  title?: string;

  @ApiProperty({
    required: false,
  })
  description?: string;
  @ApiProperty({
    required: false,
  })
  completed?: boolean;
}

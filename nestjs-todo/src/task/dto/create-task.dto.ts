import { ApiProperty } from '@nestjs/swagger';
import { Task } from '../entities/task.entity';

export class CreateTaskDto implements Task {
  @ApiProperty({
    required: false,
  })
  id: number;
  createdAt: number;
  updatedAt: number;
  @ApiProperty()
  title: string;
  @ApiProperty({
    required: false,
    default: '',
  })
  description: string = '';
  @ApiProperty({
    required: false,
  })
  completed: boolean;

  userId: number;
}

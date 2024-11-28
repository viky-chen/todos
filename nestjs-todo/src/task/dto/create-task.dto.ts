import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Task } from '../entities/task.entity';

export class CreateTaskDto
  implements Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'userId'>
{
  @ApiProperty()
  title: string;
  @ApiProperty({
    required: false,
  })
  description: string;
  @ApiProperty({
    required: false,
  })
  completed: boolean;

  userId?: number;
}

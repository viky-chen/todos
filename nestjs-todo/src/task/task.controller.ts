import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiOkResponse({
    type: CreateTaskDto,
  })
  @Post()
  create(@Req() req, @Body() createTaskDto: CreateTaskDto) {
    const user = req.user;
    createTaskDto.userId = user.id;
    createTaskDto.description = createTaskDto.description || '';
    createTaskDto.completed = createTaskDto.completed || false;
    console.log(createTaskDto);

    const task = {
      createdAt: Date.now() / 1000,
      updatedAt: Date.now() / 1000,
      ...createTaskDto,
    };
    return this.taskService.create(task);
  }

  @ApiOkResponse({
    type: [CreateTaskDto],
  })
  @Get()
  findAll(@Req() req) {
    const user = req.user;
    return this.taskService.findAll(user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.taskService.remove(+id);
  }
}

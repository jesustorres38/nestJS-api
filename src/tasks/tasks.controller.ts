import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interfaces/Task';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id) {
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): string {
    console.log(task);
    return 'Creating a task';
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
    console.log(task);
    console.log(id);
    return 'Updating a task';
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    console.log(id);
    return `Deleting a task ${id}`;
  }
}

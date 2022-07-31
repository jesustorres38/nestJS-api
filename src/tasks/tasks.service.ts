import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      id: 1,
      title: 'testing 1',
      description: 'testing description 1',
      done: false,
    },
    {
      id: 2,
      title: 'testing 2',
      description: 'testing description 2',
      done: true,
    },
    {
      id: 3,
      title: 'testing 3',
      description: 'testing description 3',
      done: false,
    },
  ];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    return this.tasks.find((task) => task.id === id);
  }
}

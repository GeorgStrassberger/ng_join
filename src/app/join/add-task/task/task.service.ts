import { Injectable } from '@angular/core';
import { ITask } from './task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: ITask[] = [
    {
      title: 'Website redesign',
      description: 'Modify the contents of the main website.',
      date: new Date(),
      priority: 'high',
      category: 'Design',
      status: 'todo',
      assignedTo: [
        {
          username: 'G-Had',
          firstname: 'Gerhard',
          lastname: 'Schröder',
          email: 'gerhard@schröder.com',
          phone: '123456789',
          tag: 'GS',
          color: '#b6ca6f',
        },
        {
          username: 'Anny',
          firstname: 'Anja',
          lastname: 'Schumacher',
          email: 'anja@schumacher.com',
          phone: '222222222',
          tag: 'AS',
          color: '#18fe87',
        },
      ],
    },
  ];

  constructor() {}
}

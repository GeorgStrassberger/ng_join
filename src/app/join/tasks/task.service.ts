import { Injectable, OnInit } from '@angular/core';
import { ITask } from './task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService implements OnInit {
  allTasks: ITask[] = [
    {
      title: 'Website redesign',
      description: 'Modify the contents of the main website.',
      date: new Date(),
      priority: 'high',
      category: 'design',
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
          uid: 's6ad4f6as4d6f',
        },
        {
          username: 'Anny',
          firstname: 'Anja',
          lastname: 'Schumacher',
          email: 'anja@schumacher.com',
          phone: '222222222',
          tag: 'AS',
          color: '#18fe87',
          uid: '3sd54fg6ds66dfg',
        },
      ],
    },
    {
      title: 'Call potentioal clients',
      description: 'Make the product presentation to prospective buyers.',
      date: new Date(),
      priority: 'low',
      category: 'sales',
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
          uid: 's6ad4f6as4d6f',
        },
      ],
    },
    {
      title: 'Lorem Ipsum',
      description: 'Lorem Ipsum bal bla bla',
      date: new Date(),
      priority: 'medium',
      category: 'marketing',
      status: 'todo',
      assignedTo: [
        {
          username: 'Konni',
          firstname: 'Konrad',
          lastname: 'Adenauer',
          email: 'konrad@adenauer.de',
          phone: '0176165313',
          tag: 'KA',
          color: '#f6cb6f',
          uid: '6as4df646ggs',
        },
        {
          username: 'G-Had',
          firstname: 'Gerhard',
          lastname: 'Schröder',
          email: 'gerhard@schröder.com',
          phone: '123456789',
          tag: 'GS',
          color: '#b6ca6f',
          uid: 's6ad4f6as4d6f',
        },
        {
          username: 'Anny',
          firstname: 'Anja',
          lastname: 'Schumacher',
          email: 'anja@schumacher.com',
          phone: '222222222',
          tag: 'AS',
          color: '#18fe87',
          uid: '3sd54fg6ds66dfg',
        },
      ],
    },
  ];
  todoTasks: ITask[] = [];
  inProgressTasks: ITask[] = [];
  awitingFeedbackTasks: ITask[] = [];
  doneTasks: ITask[] = [];
  urgentTasks: ITask[] = [];

  constructor() {
    this.filterByStatus();
  }

  ngOnInit() {}

  addTask(task: ITask): void {
    if (task) {
      this.allTasks.push(task);
    }
    this.filterByStatus(); //das er auch ins richtige geschoben wird
  }

  filterByStatus() {
    this.todoTasks = this.allTasks.filter((task) => task.status === 'todo');
    this.inProgressTasks = this.allTasks.filter(
      (task) => task.status === 'inProgress'
    );
    this.awitingFeedbackTasks = this.allTasks.filter(
      (task) => task.status === 'awaitFeedback'
    );
    this.doneTasks = this.allTasks.filter((task) => task.status === 'done');
    this.urgentTasks = this.allTasks.filter((task) => task.priority === 'high');
  }

  sortAllTasks() {
    this.allTasks.sort((a, b) => {
      if (a.status < b.status) {
        return -1;
      } else if (a.status > b.status) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}

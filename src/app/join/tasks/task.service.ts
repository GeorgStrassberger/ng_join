import { Injectable, OnInit } from '@angular/core';
import { ITask } from './task.interface';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService implements OnInit {
  allCategories: string[] = [
    'design',
    'sales',
    'media',
    'backoffice',
    'marketing',
  ];
  allTasks: ITask[] = [
    {
      uid: 'lksdaersjdf',
      title: 'Website redesign',
      description: 'Modify the contents of the main website.',
      date: new Date(),
      priority: 'high',
      category: 'design',
      status: 'todo',
      assignedTo: [
        {
          firstname: 'John',
          lastname: 'Doe',
          email: 'john@example.com',
          phone: '123456789',
          tag: 'JD',
          color: '#8e5e5d',
          uid: 'lClVNJyUtQpPLjOplEVD',
        },
        {
          firstname: 'Sarah',
          lastname: 'Johnson',
          email: 'sarah@example.com',
          phone: '0154111111',
          tag: 'SJ',
          color: '#0f1c43',
          uid: 'sTykBPkY848XkhQnhGtN',
        },
      ],
    },
    {
      uid: 'z6u4kj6z16s4d',
      title: 'Call potentioal clients',
      description: 'Make the product presentation to prospective buyers.',
      date: new Date(),
      priority: 'low',
      category: 'sales',
      status: 'todo',
      assignedTo: [
        {
          firstname: 'Michael',
          lastname: 'Johnson',
          email: 'michael@example.com',
          phone: '555555555',
          tag: 'MJ',
          color: '#812379',
          uid: 'z4sti0dz0iZvQSn14DQ2',
        },
      ],
    },
    {
      uid: 'z6u4jmz64uad',
      title: 'Werbung',
      description: 'we need more awesome popups',
      date: new Date(),
      priority: 'medium',
      category: 'marketing',
      status: 'done',
      assignedTo: [
        {
          firstname: 'Jane',
          lastname: 'Smith',
          email: 'jane@example.com',
          phone: '987654321',
          tag: 'JS',
          color: '#0da119',
          uid: 'ZSw2JODJe8pnD7KKyHpv',
        },
        {
          firstname: 'Emily',
          lastname: 'Davis',
          email: 'emily@example.com',
          phone: '999999999',
          tag: 'ED',
          color: '#f21099',
          uid: 'jMEHsKlLrqkjci1ZrNuJ',
        },
        {
          firstname: 'John',
          lastname: 'Doe',
          email: 'john@example.com',
          phone: '123456789',
          tag: 'JD',
          color: '#8e5e5d',
          uid: 'lClVNJyUtQpPLjOplEVD',
        },
      ],
    },
    {
      uid: 'b6u4asdw4uad',
      title: 'Create new Logo',
      description: 'A brand new logo with powerfull colors!',
      date: new Date(),
      priority: 'medium',
      category: 'design',
      status: 'todo',
      assignedTo: [
        {
          firstname: 'Anja',
          lastname: 'Vogel',
          email: 'anja@vogel.com',
          phone: '222222222',
          tag: 'AV',
          color: '#88657b',
          uid: '6p9qznwVgKEqeH9vv6KO',
        },
        {
          firstname: 'Emma',
          lastname: 'Wilson',
          email: 'emma@example.com',
          phone: '333333333',
          tag: 'EW',
          color: '#122bc1',
          uid: 'ZLCfQRF5Ekg2EGfeIxXt',
        },
        {
          firstname: 'Robert',
          lastname: 'Brown',
          email: 'robert@example.com',
          phone: '0167222222',
          tag: 'RB',
          color: '#05fc0c',
          uid: 'Gx6zpAXSoBA4uZ0KU08A',
        },
      ],
    },
  ];
  todoTasks: ITask[] = [];
  inProgressTasks: ITask[] = [];
  awitingFeedbackTasks: ITask[] = [];
  doneTasks: ITask[] = [];
  urgentTasks: ITask[] = [];
  currentTask!: ITask;

  constructor() {
    this.filterByStatus(this.allTasks);
  }

  ngOnInit() {}

  addTask(task: ITask): void {
    if (task) {
      this.allTasks.push(task);
      console.log('allTasks', this.allTasks);
    }
    this.filterByStatus(this.allTasks); //das er auch ins richtige geschoben wird
  }

  filterByStatus(tasks: ITask[]) {
    this.todoTasks = tasks.filter((task) => task.status === 'todo');
    this.inProgressTasks = tasks.filter((task) => task.status === 'inProgress');
    this.awitingFeedbackTasks = tasks.filter(
      (task) => task.status === 'awaitFeedback'
    );
    this.doneTasks = tasks.filter((task) => task.status === 'done');
    this.urgentTasks = tasks.filter((task) => task.priority === 'high');
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

  getTask(id: string): ITask | null {
    const currentTask = this.allTasks.find((task) => task.uid === id);
    if (currentTask) {
      return currentTask;
    } else {
      return null;
    }
  }

  updateTask(id: string, task: ITask): void {
    console.log('update: ', id + ' ' + task);
  }

  deleteTask(id: string): void {
    console.log('id; ', id);
    // Um die array zu aktuallisieren.
    this.filterByStatus(this.allTasks); // So lang es keine subscription ist.
  }
}

import { TContact } from '../../contacts/contact.interface';
import { ITask, TCategory, TPriority, TStatus } from './task.interface';

export class Task implements ITask {
  // title: string;
  // description: string;
  // priority: TPriority;
  date: Date;
  // category: TCategory;
  status: TStatus;
  // assignedTo: TContact[];
  constructor(
    private title: string,
    private description: string,
    private priority: TPriority,
    private category: TCategory,
    private assignedTo: TContact[]
  ) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.category = category;
    this.status = 'todo';
    this.date = new Date();
    this.assignedTo = assignedTo;
  }
}

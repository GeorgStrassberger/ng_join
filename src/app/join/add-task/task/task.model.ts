import { TContact } from '../../contacts/contact.interface';
import { ITask, TCategory, TPriority, TStatus } from './task.interface';

export class Task implements ITask {
  // title: string;
  // description: string;
  // date: Date;
  // category: TCategory;
  // assignedTo: TContact[];
  priority: TPriority;
  status: TStatus;

  constructor(
    public title: string,
    public description: string,
    public date: Date,
    public category: TCategory,
    public assignedTo: TContact[] // public priority: TPriority,
  ) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.category = category;
    this.assignedTo = assignedTo;
    this.status = 'todo';
    this.priority = 'low';
  }
}

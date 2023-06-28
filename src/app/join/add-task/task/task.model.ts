import { TContact } from '../../contacts/contact.interface';
import { ITask, TCategory, TPriority, TStatus } from './task.interface';

export class Task implements ITask {
  // title: string;
  // description: string;
  // priority: TPriority;
  // category: TCategory;
  // assignedTo: TContact[];
  date: Date;
  status: TStatus;

  constructor(
    public title: string,
    public description: string,
    public priority: TPriority,
    public category: TCategory,
    public assignedTo: TContact[]
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

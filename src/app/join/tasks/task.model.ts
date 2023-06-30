import { TContact } from '../contacts/contact.interface';
import { ITask, TCategory, TPriority, TStatus } from './task.interface';

export class Task implements ITask {
  // title: string;
  // description: string;
  // date: Date;
  // category: TCategory;
  // assignedTo: TContact[];
  priority: TPriority;
  status: TStatus;
  uid: string;

  constructor(
    public title: string,
    public description: string,
    public date: Date,
    public category: TCategory,
    public assignedTo: TContact[]
  ) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.category = category;
    this.assignedTo = assignedTo;
    this.status = 'todo';
    this.priority = 'low';
    this.uid = this.generateRandomUid();
  }

  generateRandomUid(length: number = 10): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    const charactersLength: number = characters.length;
    let uid: string = '';
    for (let i = 0; i < length; i++) {
      uid += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return uid;
  }
}

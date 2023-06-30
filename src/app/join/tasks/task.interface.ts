import { TContact } from '../contacts/contact.interface';

export type TStatus = 'todo' | 'inProgress' | 'awaitFeedback' | 'done';
export type TPriority = 'high' | 'medium' | 'low';
export type TCategory =
  | 'design'
  | 'sales'
  | 'media'
  | 'backoffice'
  | 'marketing';
export interface ITask {
  title: string;
  description: string;
  priority: TPriority;
  date: Date;
  category: TCategory;
  status: TStatus;
  assignedTo: TContact[];
  uid: string;
}

import { TContact } from '../../contacts/contact.interface';
import { Contact } from '../../contacts/contact.model';

export interface Task {
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  date: Date;
  category: string;
  assignedTo: TContact[];
}

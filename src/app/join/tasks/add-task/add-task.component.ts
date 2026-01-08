import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactsService } from '../../contacts/contacts.service';
import { TaskService } from '../task.service';
import { TContact } from '../../contacts/contact.interface';
import {ITask} from "../task.interface";

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.scss', './add-task.mobile.scss'],
    standalone: false
})
export class AddTaskComponent implements OnInit {
  isAdded: boolean = false;
  contacts: TContact[] = [];

  constructor(
    public contactsService: ContactsService,
    public taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
  }

  setCurrentDate(): string {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0, 10);
  }

  onCreateTask(form: NgForm): void {
    const value = form.value;
    const contact: TContact | null = this.contactsService.getContact(value.assignedTo);

    if (contact) {
      const newTask: ITask = {
        title: value.title,
        description: value.description,
        date: value.date,
        category: value.category,
        assignedTo: new Array(contact),
        priority: 'low',
        status: 'todo',
        uid: this.contactsService.generateRandomUid(),
      }
       this.isAdded = true;
      this.taskService.addTask(newTask);
    }
    form.reset();
  }

  onClose(): void {
    this.isAdded = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task.model';
import { ContactsService } from '../../contacts/contacts.service';
import { TaskService } from '../task.service';
import { TContact } from '../../contacts/contact.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss', './add-task.mobile.scss'],
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
    // const value = form.value;
    // const assignedTo = this.contactsService.getContact(value.assignedTo);
    // if (assignedTo) {
    //   const task = new Task(
    //     value.title,
    //     value.description,
    //     value.date,
    //     value.category,
    //     new Array(assignedTo)
    //   );
    //   this.isAdded = true;
    //   this.taskService.addTask(task);
    // }
    // form.reset();
  }

  onClose(): void {
    this.isAdded = false;
  }

  ngOnDestroy() {
  }
}

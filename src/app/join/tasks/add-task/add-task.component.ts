import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task.model';
import { TCategory } from '../task.interface';
import { TContact } from '../../contacts/contact.interface';
import { ContactsService } from '../../contacts/contacts.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  isAdded: boolean = false;

  constructor(
    public contactsService: ContactsService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {}

  setCurrentDate(): string {
    const today: Date = new Date();
    const todayString: string = today.toISOString().split('T')[0];
    return todayString;
  }

  onCreateTask(form: NgForm): void {
    const value = form.value;
    const assignedTo = this.contactsService.getContact(value.assignedTo);
    if (assignedTo) {
      const task = new Task(
        value.title,
        value.description,
        value.date,
        value.category,
        new Array(assignedTo)
      );
      this.isAdded = true;
      this.taskService.addTask(task);
    }
    form.reset();
  }

  onClose(): void {
    this.isAdded = false;
  }
}

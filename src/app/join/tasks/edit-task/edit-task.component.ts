import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ITask } from '../task.interface';
import { TaskService } from '../task.service';
import { ContactsService } from '../../contacts/contacts.service';
import { TContact } from '../../contacts/contact.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent {
  task: ITask;
  isEdit: boolean = false;
  contacts: TContact[] = [];
  contactsSubscription$!: Subscription;

  constructor(
    private router: Router,
    public taskService: TaskService,
    public contactsService: ContactsService
  ) {
    this.task = this.taskService.currentTask;
    console.log('this.task', this.task);
  }

  ngOnInit() {
    this.contactsSubscription$ = this.contactsService
      .getContacts$()
      .subscribe((contacts) => {
        this.contacts = contacts;
      });
  }

  onEdit(form: NgForm) {
    console.log('EDIT');
    console.log('form', form);
    this.isEdit = true;
  }

  onClose(): void {
    this.isEdit = false;
    this.router.navigate(['/join/board']);
  }

  ngOnDestroy() {
    this.contactsSubscription$.unsubscribe();
  }
}

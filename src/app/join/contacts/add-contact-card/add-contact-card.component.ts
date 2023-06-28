import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { NgForm } from '@angular/forms';
import { Contact } from '../contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact-card',
  templateUrl: './add-contact-card.component.html',
  styleUrls: ['./add-contact-card.component.scss'],
})
export class AddContactCardComponent {
  isCreated: boolean = false;

  constructor(
    private router: Router,
    private contactsService: ContactsService
  ) {}

  toTitleCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  onAdd(form: NgForm): void {
    const formvalue = form.value;
    console.log('formvalue: ', formvalue);
    const contact = new Contact(
      this.toTitleCase(form.value.username),
      this.toTitleCase(form.value.firstname),
      this.toTitleCase(form.value.lastname),
      form.value.email,
      form.value.phone
    );
    console.log('myContact: ', contact);
    this.contactsService.contacts.push(contact);
    this.isCreated = true;
    // FIREBASE
    // this.contactsService.addContact(contact);
  }

  onClose(): void {
    this.isCreated = false;
    this.router.navigate(['/contacts']);
  }
}

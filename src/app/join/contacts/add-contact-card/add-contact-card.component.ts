import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TContact } from '../contact.interface';

@Component({
  selector: 'app-add-contact-card',
  templateUrl: './add-contact-card.component.html',
  styleUrls: [
    './add-contact-card.component.scss',
    './add-contact-card.media.scss',
  ],
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
    const newContact = {
      username: form.value.username,
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      email: form.value.email,
      phone: form.value.phone,
      color: this.contactsService.getRandomColorCode(),
      tag: this.contactsService.getNameTag(
        form.value.firstname,
        form.value.lastname
      ),
      id: this.contactsService.generateRandomUid(),
    };
    this.contactsService.contacts.push(newContact);
    this.isCreated = true;
    // FIREBASE
    // this.contactsService.addContact(tContact);
  }

  onClose(): void {
    this.isCreated = false;
    this.router.navigate(['/join/contacts']);
  }
}

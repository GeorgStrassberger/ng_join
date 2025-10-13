import {Component} from '@angular/core';
import {ContactsService} from '../contacts.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

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
  ) {
  }

  toTitleCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  onAdd(form: NgForm): void {
    const formvalue = form.value;
    console.log('formvalue: ', formvalue);
    const newContact = {
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      email: form.value.email,
      phone: form.value.phone,
      color: this.contactsService.getRandomColorCode(),
      tag: this.contactsService.getNameTag(
        form.value.firstname,
        form.value.lastname
      ),
      uid: this.contactsService.generateRandomUid(),
    };
    this.isCreated = true;
    // FIREBASE
    this.contactsService.createContact(newContact);
  }

  onClose(): void {
    this.isCreated = false;
    this.router.navigate(['/join/contacts']);
  }
}

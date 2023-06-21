import { Component } from '@angular/core';
import { TContact } from '../contact.interface';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-edit-contact-card',
  templateUrl: './edit-contact-card.component.html',
  styleUrls: ['./edit-contact-card.component.scss'],
})
export class EditContactCardComponent {
  isEdit: boolean = false;
  isDeleted: boolean = false;
  // myContact!: TContact;

  myContact: TContact = {
    username: 'Schorsch',
    firstname: 'Georg',
    lastname: 'Strassberger',
    email: 'georg@georg.de',
    color: '#FFC700',
    tag: 'GS',
    phone: '3213464',
  };

  constructor(private constactsService: ContactsService) {
    if (this.constactsService.contacts.length > 0) {
      this.myContact = this.constactsService.contacts[0];
    }
  }
}

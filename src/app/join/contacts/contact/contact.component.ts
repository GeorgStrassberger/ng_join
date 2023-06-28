import { Component, Input } from '@angular/core';
import { TContact } from '../contact.interface';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  isDeleted: boolean = false;
  contact!: TContact;

  constructor(
    private router: Router,
    private contactsService: ContactsService
  ) {
    this.contact = this.contactsService.currentContact;
  }

  onEditContact(): void {
    this.contactsService.currentContact = this.contact;
    this.router.navigate(['/editContact']);
  }

  onDelete(): void {
    this.isDeleted = true;
    this.contactsService.deleteContact();
  }

  onClose(): void {
    this.isDeleted = false;
    this.router.navigate(['/contacts']);
  }
}

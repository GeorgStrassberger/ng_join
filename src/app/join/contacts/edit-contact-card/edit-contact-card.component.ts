import { Component, OnInit } from '@angular/core';
import { TContact } from '../contact.interface';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-contact-card',
  templateUrl: './edit-contact-card.component.html',
  styleUrls: [
    './edit-contact-card.component.scss',
    './edit-contact-card.mobile.scss',
  ],
})
export class EditContactCardComponent implements OnInit {
  isEdit: boolean = false;
  isDeleted: boolean = false;
  currentContact!: TContact;

  constructor(
    private router: Router,
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {
    this.currentContact = this.contactsService.currentContact;
  }

  onEdit(form: NgForm): void {
    const value = form.value;
    console.log('value', value);
    if (form.valid) {
      this.isEdit = true;
      const contact = {
        username: form.value.username,
        firstname: this.currentContact.firstname,
        lastname: this.currentContact.lastname,
        email: form.value.email,
        phone: form.value.phone,
        tag: this.currentContact.tag,
        color: this.currentContact.color,
        uid: this.currentContact.uid,
      };
      this.myLocalUpdate(contact);
    }
    // FIREBASE
    // this.contactsService.updateContact(this.currentContact.uid, contact);
  }

  myLocalUpdate(contact: TContact): void {
    const contactIndex: number = this.contactsService.contacts.findIndex(
      (contact) => contact.uid === this.currentContact.uid
    );
    console.log('indexOf:', contactIndex);
    this.contactsService.contacts.splice(contactIndex, 1);
    this.contactsService.contacts.push(contact);
  }

  onDelete(id: string): void {
    this.isDeleted = true;
    const contactIndex: number = this.contactsService.contacts.findIndex(
      (contact) => contact.uid === this.currentContact.uid
    );
    console.log('indexOf:', contactIndex);
    this.contactsService.contacts.splice(contactIndex, 1);
    this.contactsService.deleteContact(id);
  }

  onClose(): void {
    this.isEdit = false;
    this.isDeleted = false;
    this.router.navigate(['/join/contacts']);
  }
}

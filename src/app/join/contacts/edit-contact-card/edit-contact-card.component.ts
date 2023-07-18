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
  currentContact: TContact | null = null;

  constructor(
    private router: Router,
    private contactsService: ContactsService
  ) {}

  ngOnInit() {
    this.contactsService.contact$.subscribe((contact) => {
      this.currentContact = contact;
    });
  }

  onEdit(form: NgForm): void {
    const value = form.value;
    if (form.valid && this.currentContact) {
      this.isEdit = true;
      const editContact: TContact = {
        firstname: form.value.firstname,
        lastname: form.value.lastname,
        email: form.value.email,
        phone: form.value.phone,
        tag: this.contactsService.getNameTag(
          form.value.firstname,
          form.value.lastname
        ),
        color: this.currentContact.color,
        uid: this.currentContact.uid,
      };
      this.contactsService.contact$.next(editContact);
      this.contactsService.updateContact(editContact);
    }
    // FIREBASE
    // this.contactsService.updateContact(this.currentContact.uid, contact);
  }

  onUpdate(contact: TContact) {
    const contactIndex: number = this.contactsService.contacts.findIndex(
      (contact) => contact.uid === this.currentContact!.uid
    );
    this.contactsService.contacts.splice(contactIndex, 1);
    this.contactsService.contacts.push(contact);
  }

  onDelete(id: string): void {
    this.isDeleted = true;
    const contactIndex: number = this.contactsService.contacts.findIndex(
      (contact) => contact.uid === this.currentContact!.uid
    );
    this.contactsService.contacts.splice(contactIndex, 1);
    this.contactsService.deleteContact(id);
  }

  onClose(): void {
    this.isEdit = false;
    this.isDeleted = false;
    this.router.navigate(['/join/contacts']);
  }
}

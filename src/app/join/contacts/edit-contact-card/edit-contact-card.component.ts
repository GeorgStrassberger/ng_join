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

  ngOnInit() {
    this.currentContact = this.contactsService.currentContact;
  }

  onEdit(form: NgForm): void {
    const value = form.value;
    console.log("onEdit", value);
  }

  onUpdate(contact: TContact) {
    console.log("onUpdate", contact);
  }

  onDelete(id: string): void {
    this.isDeleted = true;
    this.contactsService.deleteContact(id);
  }

  onClose(): void {
    this.isEdit = false;
    this.isDeleted = false;
    this.router.navigate(['/join/contacts']);
  }
}

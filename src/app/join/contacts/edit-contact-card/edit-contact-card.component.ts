import { Component, OnInit } from '@angular/core';
import { TContact } from '../contact.interface';
import { ContactsService } from '../contacts.service';
import {ActivatedRoute, Router} from '@angular/router';
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
  contact!: TContact;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService
  ) {}

  ngOnInit() {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id){
      const contact = this.contactsService.getContact(id);
      if(contact){
        this.contact = contact;
        console.log('this.contact', this.contact);
      }
    }
    else {
      console.log('ID is null');
    }
  }

  onEdit(form: NgForm): void {
    const value = form.value;
    const contect: TContact = {
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      email: form.value.email,
      phone: form.value.phone,
      color: this.contact.color,
      tag: this.contact.tag,
      uid: this.contact.uid,
    };
    console.log("onEdit", contect);
    // Update Contact
    this.isEdit = true;
    this.contactsService.editContact(contect);
    // this.router.navigate(['/join/contact', contect.uid]);
  }

  onDelete(contectID: string): void {
    this.isDeleted = true;
    this.contactsService.deleteContact(contectID);
  }

  onCloseEdit(contect: TContact): void {
    this.isEdit = false;
    this.router.navigate(['/join/contact', contect.uid]);
  }

  onCloseDelete(): void {
    this.isEdit = false;
    this.isDeleted = false;
    this.router.navigate(['/join/contacts']);
  }
}

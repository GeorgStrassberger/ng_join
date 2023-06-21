import { Injectable } from '@angular/core';
import { TContact } from './contact.interface';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contacts: TContact[] = [];

  constructor() {
    this.addDummyContacts();
    console.log('constacts: ', this.contacts);
  }

  addDummyContacts() {
    const contact1 = new Contact(
      'Jonny',
      'John',
      'Doe',
      'john@example.com',
      '123456789'
    );
    const contact2 = new Contact(
      'Janny',
      'Jane',
      'Smith',
      'jane@example.com',
      '987654321'
    );
    const contact3 = new Contact(
      'MikeJo',
      'Michael',
      'Johnson',
      'michael@example.com',
      '555555555'
    );
    const contact4 = new Contact(
      'Emily',
      'Emily',
      'Davis',
      'emily@example.com',
      '999999999'
    );
    const contact5 = new Contact(
      'Sarah',
      'Sarah',
      'Johnson',
      'sarah@example.com',
      '111111111'
    );
    const contact6 = new Contact(
      'Rob',
      'Robert',
      'Brown',
      'robert@example.com',
      '222222222'
    );
    const contact7 = new Contact(
      'Emmy',
      'Emma',
      'Wilson',
      'emma@example.com',
      '333333333'
    );
    const contact8 = new Contact(
      'David',
      'David',
      'Thompson',
      'david@example.com',
      '444444444'
    );

    const dummyContacts: Contact[] = [
      contact1,
      contact2,
      contact3,
      contact4,
      contact5,
      contact6,
      contact7,
      contact8,
    ];
    this.contacts = [...dummyContacts];
  }

  getAllContacts() {}

  /**
   * Create a new Contact and store it on Firebase
   * @param fn
   * @param ln
   * @param email
   * @param phone
   */
  createContact(
    un: string,
    fn: string,
    ln: string,
    email: string,
    phone: string = ''
  ): void {
    const contact = new Contact(un, fn, ln, email, phone);
    this.contacts.push(contact);
    console.log('constacts: ', this.contacts);
  }

  getContact() {}

  updateContact() {}

  deleteContact() {}
}

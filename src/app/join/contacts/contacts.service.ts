import { Injectable } from '@angular/core';
import { TContact } from './contact.interface';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  currentContact!: TContact; // später ein subject draus machen
  contacts: TContact[] = [
    {
      username: 'Schorsch',
      firstname: 'Georg',
      lastname: 'Strassberger',
      email: 'georg@strassberger.de',
      phone: '017696477716',
      tag: 'GS',
      color: '#FFC700',
    },
  ];

  constructor() {
    this.getAllContacts();
  }

  getAllContacts(): void {
    this.addDummyContacts();
  }

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

  getContact(index: number): TContact {
    const currentContact = this.contacts[index];
    return currentContact;
  }

  updateContact(): void {}

  deleteContact(): void {}

  addDummyContacts(): void {
    const contact0 = this.createContact(
      'G-Had',
      'Gerhard',
      'Schröder',
      'gerhard@schröder.com',
      '123456789'
    );
    const contact1 = this.createContact(
      'Jonny',
      'John',
      'Doe',
      'john@example.com',
      '123456789'
    );

    const contact2 = this.createContact(
      'Janny',
      'Jane',
      'Smith',
      'jane@example.com',
      '987654321'
    );
    const contact3 = this.createContact(
      'MikeJo',
      'Michael',
      'Johnson',
      'michael@example.com',
      '555555555'
    );
    const contact4 = this.createContact(
      'Emily',
      'Emily',
      'Davis',
      'emily@example.com',
      '999999999'
    );
    const contact5 = this.createContact(
      'Sarah',
      'Sarah',
      'Johnson',
      'sarah@example.com',
      '111111111'
    );
    const contact6 = this.createContact(
      'Rob',
      'Robert',
      'Brown',
      'robert@example.com',
      '222222222'
    );
    const contact7 = this.createContact(
      'Emmy',
      'Emma',
      'Wilson',
      'emma@example.com',
      '333333333'
    );
    const contact8 = this.createContact(
      'David',
      'David',
      'Thompson',
      'david@example.com',
      '444444444'
    );
    const contact9 = this.createContact(
      'Anny',
      'Anja',
      'Schumacher',
      'anja@schumacher.com',
      '222222222'
    );
  }
}

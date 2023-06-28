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
      uid: 'as65d4fasdf',
    },
  ];

  constructor() {
    this.addDummyContacts();
  }

  getAllContacts(): TContact[] {
    return this.contacts;
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
    phone: string,
    uid: string
  ): void {
    const contact = new Contact(un, fn, ln, email, phone, uid);
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
      '123456789',
      's6ad4f6as4d6f'
    );
    const contact1 = this.createContact(
      'Jonny',
      'John',
      'Doe',
      'john@example.com',
      '123456789',
      'd9f4g9sd4fg'
    );

    const contact2 = this.createContact(
      'Janny',
      'Jane',
      'Smith',
      'jane@example.com',
      '987654321',
      'adsf4s64f6asd4f'
    );
    const contact3 = this.createContact(
      'MikeJo',
      'Michael',
      'Johnson',
      'michael@example.com',
      '555555555',
      '5sa6d4f654as6d4f'
    );
    const contact4 = this.createContact(
      'Emily',
      'Emily',
      'Davis',
      'emily@example.com',
      '999999999',
      'fdsdf06sdf6'
    );
    const contact5 = this.createContact(
      'Sarah',
      'Sarah',
      'Johnson',
      'sarah@example.com',
      '111111111',
      '65sd4f64sd6f4'
    );
    const contact6 = this.createContact(
      'Rob',
      'Robert',
      'Brown',
      'robert@example.com',
      '222222222',
      '7a99dfg79da'
    );
    const contact7 = this.createContact(
      'Emmy',
      'Emma',
      'Wilson',
      'emma@example.com',
      '333333333',
      '23df1gs64'
    );
    const contact8 = this.createContact(
      'David',
      'David',
      'Thompson',
      'david@example.com',
      '444444444',
      '9a2s3df1g3sadf'
    );
    const contact9 = this.createContact(
      'Anny',
      'Anja',
      'Schumacher',
      'anja@schumacher.com',
      '222222222',
      '3sd54fg6ds66dfg'
    );
  }
}

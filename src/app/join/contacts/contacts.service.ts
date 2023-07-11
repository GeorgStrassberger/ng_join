import { Injectable } from '@angular/core';
import { TContact } from './contact.interface';
import { Contact } from './contact.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contacts: TContact[] = [];
  contact$ = new BehaviorSubject<TContact | null>(null);

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
    phone: string
  ): void {
    const contact = new Contact(un, fn, ln, email, phone);
    this.contacts.push(contact);
  }

  getContact(id: string): TContact | null {
    const currentContact = this.contacts.find((contact) => contact.id === id);
    if (currentContact) {
      return currentContact;
    } else {
      return null;
    }
  }

  addContact(contact: TContact) {
    console.log('addContact: ', contact);
  }

  updateContact(id: string, contact: TContact): void {
    console.log('update: ', id + ' ' + contact);
  }

  deleteContact(id: string): void {
    console.log('id; ', id);
  }

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

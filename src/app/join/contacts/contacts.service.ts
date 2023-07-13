import { Injectable } from '@angular/core';
import { TContact } from './contact.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  DocumentData,
  DocumentReference,
  Firestore,
  Query,
  collectionData,
  deleteDoc,
  doc,
  docData,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { collection, CollectionReference } from '@firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contact$ = new BehaviorSubject<TContact | null>(null);
  contacts: TContact[] = [
    {
      firstname: 'John',
      lastname: 'Doe',
      email: 'john@example.com',
      phone: '123456789',
      tag: 'JD',
      color: '#8e5e5d',
      id: 'lClVNJyUtQpPLjOplEVD',
    },
    {
      firstname: 'Gerhard',
      lastname: 'Schröder',
      email: 'gerhard@schröder.com',
      phone: '123456789',
      tag: 'GS',
      color: '#66af59',
      id: 'bsnzVvrRGKE6b2Vxw27y',
    },
    {
      firstname: 'Jane',
      lastname: 'Smith',
      email: 'jane@example.com',
      phone: '987654321',
      tag: 'JS',
      color: '#0da119',
      id: 'ZSw2JODJe8pnD7KKyHpv',
    },
    {
      firstname: 'Emily',
      lastname: 'Davis',
      email: 'emily@example.com',
      phone: '999999999',
      tag: 'ED',
      color: '#f21099',
      id: 'jMEHsKlLrqkjci1ZrNuJ',
    },
    {
      firstname: 'Michael',
      lastname: 'Johnson',
      email: 'michael@example.com',
      phone: '555555555',
      tag: 'MJ',
      color: '#812379',
      id: 'z4sti0dz0iZvQSn14DQ2',
    },
    {
      firstname: 'Sarah',
      lastname: 'Johnson',
      email: 'sarah@example.com',
      phone: '0154111111',
      tag: 'SJ',
      color: '#0f1c43',
      id: 'sTykBPkY848XkhQnhGtN',
    },
    {
      firstname: 'Anja',
      lastname: 'Vogel',
      email: 'anja@vogel.com',
      phone: '222222222',
      tag: 'AV',
      color: '#88657b',
      id: '6p9qznwVgKEqeH9vv6KO',
    },
    {
      firstname: 'Emma',
      lastname: 'Wilson',
      email: 'emma@example.com',
      phone: '333333333',
      tag: 'EW',
      color: '#122bc1',
      id: 'ZLCfQRF5Ekg2EGfeIxXt',
    },
    {
      firstname: 'Robert',
      lastname: 'Brown',
      email: 'robert@example.com',
      phone: '0167222222',
      tag: 'RB',
      color: '#05fc0c',
      id: 'Gx6zpAXSoBA4uZ0KU08A',
    },
    {
      firstname: 'David',
      lastname: 'Thompson',
      email: 'david@example.com',
      phone: '444444444',
      tag: 'DT',
      color: '#c2e907',
      id: 'YaEVFCsID2ldc2x1F2AN',
    },
  ];

  constructor(private firestore: Firestore) {}

  getContacts$(): Observable<TContact[]> {
    return collectionData(collection(this.firestore, 'contacts'), {
      idField: 'id',
    }) as Observable<TContact[]>;
  }

  getAllContacts(): TContact[] {
    return this.contacts;
  }

  createContact(contact: TContact): void {
    this.contacts.push(contact);
    console.log(this.contacts);
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
    const newContact: TContact = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      tag: this.getNameTag(contact.firstname, contact.lastname),
      color: this.getRandomColorCode(),
      id: this.generateRandomUid(),
    };
    this.contacts.push(newContact);
  }

  updateContact(id: string, contact: TContact): void {
    console.log('update: ', id + ' ' + contact);
  }

  deleteContact(id: string): void {
    console.log('id; ', id);
  }

  /**
   * generate a contact tag
   * @param fn
   * @param ln
   * @returns
   */
  getNameTag(fn: string, ln: string): string {
    const tag: string = fn[0] + ln[0];
    return tag;
  }

  /**
   * Generate a random hex color code
   * @returns
   */
  getRandomColorCode(): string {
    const colorCode: number = Math.floor(Math.random() * 16777216);
    const hexCode: string = colorCode.toString(16).padStart(6, '0');
    const color: string = `#${hexCode}`;
    return color;
  }

  generateRandomUid(length: number = 20): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    const charactersLength: number = characters.length;
    let uid: string = '';
    for (let i = 0; i < length; i++) {
      uid += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return uid;
  }
}

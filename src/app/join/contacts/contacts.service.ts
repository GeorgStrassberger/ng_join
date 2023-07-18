import { Injectable } from '@angular/core';
import { TContact } from './contact.interface';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import {
  Firestore,
  addDoc,
  collectionData,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contact$ = new BehaviorSubject<TContact | null>(null);
  contactsSubscription$!: Subscription;
  contacts: TContact[] = [];

  constructor(private firestore: Firestore) {
    this.contactsSubscription$ = this.getContacts$().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

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
  }

  getContact(id: string): TContact | null {
    const currentContact = this.contacts.find((contact) => contact.uid === id);
    if (currentContact) {
      return currentContact;
    } else {
      return null;
    }
  }

  addContact(contact: TContact) {
    addDoc(collection(this.firestore, 'contacts'), contact)
      .then((docRef) => {
        const updateContact = { ...contact, uid: docRef.id };
        console.log('updateContact: ', updateContact);
        this.updateContact(updateContact);
      })
      .catch((error) => console.warn(error.message));
  }

  updateContact(contact: TContact) {
    const contactDocumentReference = doc(
      this.firestore,
      `contacts/${contact.uid}`
    );
    return updateDoc(contactDocumentReference, { ...contact });
  }

  deleteContact(id: string) {
    console.log('id; ', id);
    const gameDocumentReference = doc(this.firestore, `contacts/${id}`);
    return deleteDoc(gameDocumentReference);
  }

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

  ngOnDestroy() {
    this.contactsSubscription$.unsubscribe();
  }
}

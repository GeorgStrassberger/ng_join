import {Injectable} from '@angular/core';
import {TContact} from './contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contacts: TContact[] = [];
  currentContact: TContact = this.contacts[0];

  constructor() {
  }

  getAllContacts(): TContact[] {
    return this.contacts;
  }

  createContact(contact: TContact): void {
    this.contacts.push(contact);
  }

  updateContact(contact: TContact): void {
    const contactIndex = this.contacts.indexOf(contact);
    if (contactIndex >= 0) {
      this.contacts[contactIndex] = contact;
    }
  }

  deleteContact(id: string){
    const contactIndex = this.contacts.findIndex(id => id === id);
    this.contacts.splice(contactIndex, 1);
  };

  getContact(id: string): TContact | null {
    const currentContact = this.contacts.find((contact) => contact.uid === id);
    if (currentContact) {
      return currentContact;
    } else {
      return null;
    }
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
  }
}

import {Injectable} from '@angular/core';
import {TContact} from './contact.interface';


@Injectable({
  providedIn: 'root',
})
export class ContactsService {

  private _contacts: TContact[] = [
      {
        "firstname": "Hans",
        "lastname": "Müller",
        "email": "hans.mueller@gmail.de",
        "phone": "0176964712316",
        "color": "#aa16a6",
        "tag": "HM",
        "uid": "UUCfpisrXRKxmOXfIskO"
      }
    ];

  constructor() {
  }

  getContacts(): TContact[] {
    return this._contacts;
    console.log("Contacts: ", this._contacts);
  }

  addContact(contact: TContact): void {
    this._contacts.push(contact);
    console.log("Add to Contacts: ", this._contacts);
  }

  editContact(contact: TContact): void {
    const contactIndex = this._contacts.indexOf(contact);
    if (contactIndex >= 0) {
      this._contacts[contactIndex] = contact;
    }
  }

  deleteContact(id: string) {
    const contactIndex: number = this._contacts.findIndex((contact: TContact): boolean => contact.uid === id);
    if (contactIndex){
      this._contacts.splice(contactIndex, 1);
      console.log("Contact Deleted");
    }else{
      console.log("Contact not found");
    }
  };

  getContact(id: string): TContact | null {
    const contact: TContact | undefined = this._contacts.find((contact: TContact): boolean => contact.uid === id);
    if (contact) {
      return contact;
    } else {
      return null;
    }
  }

  getNameTag(fn: string, ln: string): string {
    return fn[0] + ln[0];
  }

  /**
   * Generate a random hex color code
   * @returns
   */
  getRandomColorCode(): string {
    const colorCode: number = Math.floor(Math.random() * 16777216);
    const hexCode: string = colorCode.toString(16).padStart(6, '0');
    return `#${hexCode}`;
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

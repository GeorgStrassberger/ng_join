import { TContact } from './contact.interface';

export class Contact implements TContact {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  tag: string;
  color: string;

  constructor(
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    phone: string
  ) {
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.tag = this.createTag(this.firstname, this.lastname);
    this.color = this.getRandomColorCode();
  }

  /**
   * create a tag for every Contact
   * @param fn
   * @param ln
   * @returns
   */
  createTag(fn: string, ln: string) {
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
}

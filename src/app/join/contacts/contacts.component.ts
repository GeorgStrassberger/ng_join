import { Component } from '@angular/core';
import { ContactsService } from './contacts.service';
import { TContact } from './contact/contact.interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  isNewContactOpen: boolean = false;
  constructor(private contactService: ContactsService) {}

  ngOnInit() {}

  /**
   * Open Card to add new Contact
   * Placeholder:: late add this fn into the cardcomponent
   */
  openNewContactCard() {
    this.contactService.createContact(
      'Georg',
      'Strassberger',
      'georg@georg.de'
    );
  }

  /**
   * Open Card to edit Contact
   */
  openContact() {}

  // Funktion, um die eindeutigen Anfangsbuchstaben der Vornamen zu extrahieren
  uniqueFirstLetters(): string[] {
    const firstLetters = this.contactService.contacts.map(
      (contact) => contact.firstname[0]
    );
    return [...new Set(firstLetters)].sort();
  }

  // Funktion, um die Kontakte mit dem gegebenen Anfangsbuchstaben zu filtern
  contactsStartingWith(letter: string): TContact[] {
    return this.contactService.contacts.filter((contact) =>
      contact.firstname.startsWith(letter)
    );
  }
}

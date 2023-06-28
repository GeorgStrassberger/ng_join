import { Component } from '@angular/core';
import { ContactsService } from './contacts.service';
import { TContact } from './contact.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  isNewContactOpen: boolean = false;

  selcetedContact!: TContact;

  constructor(
    private router: Router,
    private contactService: ContactsService
  ) {}

  ngOnInit() {}

  /**
   * Open Card to add new Contact
   * Placeholder:: late add this fn into the cardcomponent
   */
  openNewContactCard() {
    this.contactService.createContact(
      'Schorschi',
      'Georg',
      'Strassberger',
      'georg@georg.de'
    );
  }

  /**
   * Open Card to edit Contact
   */
  openContact(contact: TContact): void {
    this.contactService.currentContact = contact;
    this.router.navigate(['/contact']);
    console.log('Contact: ', contact);
  }

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

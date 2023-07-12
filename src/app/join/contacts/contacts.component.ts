import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';
import { TContact } from './contact.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss', './contacts.mobile.scss'],
})
export class ContactsComponent implements OnInit {
  isNewContactOpen: boolean = false;

  constructor(
    private router: Router,
    private contactService: ContactsService
  ) {}

  ngOnInit() {}

  /**
   * Open Card to add new Contact
   * Placeholder:: late add this fn into the cardcomponent
   */
  onNewContact() {
    this.router.navigate(['/join/addContact']);
  }

  /**
   * Open Card to edit Contact
   */
  openContact(contact: TContact): void {
    this.contactService.contact$.next(contact);
    this.router.navigate(['/join/contact']);
  }

  // Funktion, um die eindeutigen Anfangsbuchstaben der Vornamen zu extrahieren
  uniqueFirstLetters(): string[] {
    const firstLetters = this.contactService.contacts.map((contact) =>
      contact.firstname[0].toLowerCase()
    );
    console.log(firstLetters);
    return [...new Set(firstLetters)].sort();
  }

  // Funktion, um die Kontakte mit dem gegebenen Anfangsbuchstaben zu filtern
  contactsStartingWith(letter: string): TContact[] {
    return this.contactService.contacts.filter((contact) =>
      contact.firstname.toLowerCase().startsWith(letter)
    );
  }
}

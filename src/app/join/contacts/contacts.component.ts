import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';
import { TContact } from './contact.interface';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss', './contacts.mobile.scss'],
})
export class ContactsComponent implements OnInit, OnDestroy {
  isNewContactOpen: boolean = false;
  contacts: TContact[] = [];
  contactsSubscription$!: Subscription;

  constructor(
    private router: Router,
    private contactService: ContactsService
  ) {}

  ngOnInit() {
    this.contactsSubscription$ = this.contactService
      .getContacts$()
      .subscribe((contacts) => {
        this.contacts = contacts;
        console.log('contacts: ', contacts);
      });
  }

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
    const firstLetters = this.contacts.map((contact) =>
      contact.firstname[0].toLowerCase()
    );
    return [...new Set(firstLetters)].sort();
  }

  // Funktion, um die Kontakte mit dem gegebenen Anfangsbuchstaben zu filtern
  contactsStartingWith(letter: string): TContact[] {
    return this.contacts.filter((contact) =>
      contact.firstname.toLowerCase().startsWith(letter)
    );
  }

  ngOnDestroy() {
    this.contactsSubscription$.unsubscribe();
  }
}

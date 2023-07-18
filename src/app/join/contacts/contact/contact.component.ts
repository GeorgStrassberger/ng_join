import { Component, OnDestroy, OnInit } from '@angular/core';
import { TContact } from '../contact.interface';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contact.mobile.scss'],
})
export class ContactComponent implements OnInit, OnDestroy {
  isDeleted: boolean = false;
  contact: TContact | null = null;
  constactsSub$!: Subscription;

  constructor(
    private router: Router,
    public contactsService: ContactsService
  ) {}

  ngOnInit() {
    this.constactsSub$ = this.contactsService.contact$.subscribe((contact) => {
      this.contact = contact;
      console.log(contact);
    });
  }

  onEditContact(): void {
    this.router.navigate(['/join/editContact']);
  }

  onDelete(id: string): void {
    this.isDeleted = true;
    const contactIndex: number = this.contactsService.contacts.findIndex(
      (contact) => contact.uid === this.contact!.uid
    );
    this.contactsService.contacts.splice(contactIndex, 1);
    this.contactsService.deleteContact(id);
  }

  onClose(): void {
    this.isDeleted = false;
    this.router.navigate(['/join/contacts']);
  }

  ngOnDestroy() {
    this.constactsSub$.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { TContact } from '../contact.interface';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact-card',
  templateUrl: './edit-contact-card.component.html',
  styleUrls: ['./edit-contact-card.component.scss'],
})
export class EditContactCardComponent implements OnInit {
  isEdit: boolean = false;
  isDeleted: boolean = false;
  currentContact!: TContact;

  constructor(
    private router: Router,
    private constactsService: ContactsService
  ) {}

  ngOnInit(): void {
    this.currentContact = this.constactsService.currentContact;
  }

  onEdit(): void {
    this.isEdit = true;
    this.constactsService.updateContact();
  }

  onDelete(): void {
    this.isDeleted = true;
    this.constactsService.deleteContact();
  }

  onClose(): void {
    this.isEdit = false;
    this.isDeleted = false;
    this.router.navigate(['/contacts']);
  }
}

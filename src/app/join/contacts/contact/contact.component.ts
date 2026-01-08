import {Component, OnInit} from '@angular/core';
import {TContact} from '../contact.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from '../contacts.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss', './contact.mobile.scss'],
    standalone: false
})
export class ContactComponent implements OnInit {

  isDeleted: boolean = false;
  contact: TContact | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService
  ) {
  }

  ngOnInit() {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id){
      this.contact = this.contactsService.getContact(id);
      console.log('this.contact', this.contact);
    }
    else {
      console.log('ID is null');
    }
  }

  onEdit(contactID: string): void {
    this.router.navigate(['/join/editContact', contactID]);
  }

  onDelete(contactID: string): void {
    this.isDeleted = true;
    this.contactsService.deleteContact(contactID);
  }

  onClose(): void {
    this.isDeleted = false;
    this.router.navigate(['/join/contacts']);
  }
}

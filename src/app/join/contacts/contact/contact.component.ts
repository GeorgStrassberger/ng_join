import { Component, Input } from '@angular/core';
import { TContact } from './contact.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() contact!: TContact;
}

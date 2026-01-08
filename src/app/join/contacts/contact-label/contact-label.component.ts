import { Component, Input } from '@angular/core';
import { TContact } from '../contact.interface';

@Component({
    selector: 'app-contact-label',
    templateUrl: './contact-label.component.html',
    styleUrls: ['./contact-label.component.scss'],
    standalone: false
})
export class ContactLabelComponent {
  @Input() contact!: TContact;
  @Input() index!: number;
}

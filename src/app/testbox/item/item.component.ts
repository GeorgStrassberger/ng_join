import { Component, Input } from '@angular/core';
import { myData } from '../testbox.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item!: myData;
}

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

export interface myData {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-testbox',
  templateUrl: './testbox.component.html',
  styleUrls: ['./testbox.component.scss'],
})
export class TestboxComponent {
  todoItems: myData[] = [
    { id: 120, name: 'Georg', description: 'Papa' },
    { id: 121, name: 'Peter', description: 'Laberlachs' },
    { id: 122, name: 'Johanna', description: 'Leberkas' },
    { id: 123, name: 'Paul', description: 'Schnitzel' },
    { id: 124, name: 'Susanne', description: 'Nudelholz' },
  ];
  progressItems: myData[] = [];
  awaitItems: myData[] = [
    { id: 130, name: 'Anna', description: 'Einfach so' },
    { id: 131, name: 'Helmut', description: 'Tralla la' },
  ];
  doneItems: myData[] = [{ id: 140, name: 'Klaus', description: 'von Kleber' }];

  onDrop(event: CdkDragDrop<myData[]>): void {
    // wenn der gestartete container == der aktuelle container ist => dann sind wir im selben container
    if (event.previousContainer == event.container) {
      moveItemInArray(this.todoItems, event.previousIndex, event.currentIndex);
    } else {
      // .data benötigt [cdkDropListData]="arrayName"
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

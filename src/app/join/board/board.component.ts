import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Task } from '../add-task/task/task.interface';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  todoTasks: Task[] = [
    {
      title: 'Website redesign',
      description: 'Modify the contents of the main website.',
      date: new Date(),
      priority: 'high',
      category: 'Design',
      assignedTo: [
        {
          username: 'G-Had',
          firstname: 'Gerhard',
          lastname: 'Schröder',
          email: 'gerhard@schröder.com',
          phone: '123456789',
          tag: 'GS',
          color: '#b6ca6f',
        },
        {
          username: 'Anny',
          firstname: 'Anja',
          lastname: 'Schumacher',
          email: 'anja@schumacher.com',
          phone: '222222222',
          tag: 'AS',
          color: '#18fe87',
        },
      ],
    },
    {
      title: 'Call potentioal clients',
      description: 'Make the product presentation to prospective buyers.',
      date: new Date(),
      priority: 'low',
      category: 'Sales',
      assignedTo: [
        {
          username: 'G-Had',
          firstname: 'Gerhard',
          lastname: 'Schröder',
          email: 'gerhard@schröder.com',
          phone: '123456789',
          tag: 'GS',
          color: '#b6ca6f',
        },
      ],
    },
    {
      title: 'Lorem Ipsum',
      description: 'Lorem Ipsum bal bla bla',
      date: new Date(),
      priority: 'medium',
      category: 'Markting',
      assignedTo: [
        {
          username: 'Konni',
          firstname: 'Konrad',
          lastname: 'Adenauer',
          email: 'konrad@adenauer.de',
          phone: '0176165313',
          tag: 'KA',
          color: '#f6cb6f',
        },
        {
          username: 'G-Had',
          firstname: 'Gerhard',
          lastname: 'Schröder',
          email: 'gerhard@schröder.com',
          phone: '123456789',
          tag: 'GS',
          color: '#b6ca6f',
        },
        {
          username: 'Anny',
          firstname: 'Anja',
          lastname: 'Schumacher',
          email: 'anja@schumacher.com',
          phone: '222222222',
          tag: 'AS',
          color: '#18fe87',
        },
      ],
    },
  ];
  inProgressTasks: Task[] = [];
  awitingFeedbackTasks: Task[] = [];
  doneTasks: Task[] = [];

  onDrop(event: CdkDragDrop<Task[]>): void {
    // wenn der gestartete container == der aktuelle container ist => dann sind wir im selben container
    if (event.previousContainer == event.container) {
      moveItemInArray(this.todoTasks, event.previousIndex, event.currentIndex);
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

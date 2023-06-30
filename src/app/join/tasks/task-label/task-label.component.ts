import { Component, Input } from '@angular/core';
import { ITask } from '../task.interface';

@Component({
  selector: 'app-task-label',
  templateUrl: './task-label.component.html',
  styleUrls: ['./task-label.component.scss'],
})
export class TaskLabelComponent {
  @Input() task!: ITask;
}

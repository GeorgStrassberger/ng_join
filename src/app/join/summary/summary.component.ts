import { Component } from '@angular/core';
import { TaskService } from '../add-task/task/task.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss', 'summary.media.scss'],
})
export class SummaryComponent {
  constructor(public taskService: TaskService) {}
}

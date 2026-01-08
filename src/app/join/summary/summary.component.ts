import { Component } from '@angular/core';
import { TaskService } from '../tasks/task.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.scss', 'summary.media.scss'],
    standalone: false
})
export class SummaryComponent {
  constructor(public taskService: TaskService, private router: Router) {}

  goTo(section: string) {
    this.router.navigateByUrl(`/join/board#${section}`);
  }
}

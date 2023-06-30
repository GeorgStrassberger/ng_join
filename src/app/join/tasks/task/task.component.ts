import { Component } from '@angular/core';
import { ITask } from '../task.interface';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  task!: ITask;
  isDeleted: boolean = false;

  constructor(private router: Router, private taskService: TaskService) {
    this.task = this.taskService.currentTask;
  }

  onEditTask(): void {
    this.router.navigate(['/editTask']);
  }

  onDelete(id: string): void {
    this.isDeleted = true;

    const taskIndex: number = this.taskService.allTasks.findIndex(
      (task) => task.uid === id
    );
    console.log('indexOf:', taskIndex);
    this.taskService.allTasks.splice(taskIndex, 1);
    this.taskService.deleteTask(id);
  }

  onClose(): void {
    this.isDeleted = false;
    this.router.navigate(['/board']);
  }
}

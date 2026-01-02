import { Component, OnInit } from '@angular/core';
import { ITask } from '../task.interface';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss', './task.mobile.scss'],
})
export class TaskComponent implements OnInit {
  task!: ITask;
  isDeleted: boolean = false;

  constructor(private router: Router, private taskService: TaskService) {
    this.task = this.taskService.currentTask;
  }

  ngOnInit() {
    console.log('this.task', this.task);
  }

  onEdit(taskId: string): void {
    this.router.navigate(['/join/editTask', taskId]);
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
    this.router.navigate(['/join/board']);
  }
}

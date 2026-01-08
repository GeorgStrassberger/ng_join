import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ITask } from '../tasks/task.interface';
import { TaskService } from '../tasks/task.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss', './board.media.scss'],
    standalone: false
})
export class BoardComponent {
  todoTasks: ITask[] = [];
  inProgressTasks: ITask[] = [];
  awaitingFeedbackTasks: ITask[] = [];
  doneTasks: ITask[] = [];
  touchedAt!: number;
  searchText: string = '';

  constructor(private router: Router, private taskService: TaskService) {
    this.todoTasks = this.taskService.todoTasks;
    this.inProgressTasks = this.taskService.inProgressTasks;
    this.awaitingFeedbackTasks = this.taskService.awaitingFeedbackTasks;
    this.doneTasks = this.taskService.doneTasks;
  }

  onDrop(event: CdkDragDrop<ITask[]>): void {
    const currentTask: ITask =
      event.previousContainer.data[event.previousIndex];
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
      this.updateTaskStatus(currentTask, event.container.id);
    }
    // Serve http put request
  }

  updateTaskStatus(task: ITask, eventID: string): void {
    if (eventID == 'cdk-drop-list-0') {
      task.status = 'todo';
      console.log('TASK: ', task);
    } else if (eventID == 'cdk-drop-list-1') {
      task.status = 'inProgress';
      console.log('TASK: ', task);
    } else if (eventID == 'cdk-drop-list-2') {
      task.status = 'awaitFeedback';
      console.log('TASK: ', task);
    } else if (eventID == 'cdk-drop-list-3') {
      task.status = 'done';
      console.log('TASK: ', task);
    }
  }

  openTask(task: ITask): void {
    this.taskService.currentTask = task;
    this.router.navigate(['/join/task']);
  }

  handleDoubleTouch(event: TouchEvent, task: ITask): void {
    const currentTouch = Date.now();
    const lastTouch = Date.now() - this.touchedAt;
    if (lastTouch < 300) {
      this.openTask(task);
    }
    this.touchedAt = currentTouch;
  }

  searchTasks(tasks: ITask[]): ITask[] {
    if (this.searchText.trim() === '') {
      return tasks;
    }
    const filteredTasks = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        task.description
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        task.category.toLowerCase().includes(this.searchText.toLowerCase())
    );
    return filteredTasks;
  }
}

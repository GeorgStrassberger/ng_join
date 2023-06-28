import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ITask } from '../add-task/task/task.interface';
import { TaskService } from '../add-task/task/task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  todoTasks: ITask[] = [];
  inProgressTasks: ITask[] = [];
  awitingFeedbackTasks: ITask[] = [];
  doneTasks: ITask[] = [];

  constructor(private taskService: TaskService) {
    this.todoTasks = this.taskService.todoTasks;
    this.inProgressTasks = this.taskService.inProgressTasks;
    this.awitingFeedbackTasks = this.taskService.awitingFeedbackTasks;
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
}

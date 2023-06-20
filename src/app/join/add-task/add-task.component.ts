import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  added: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  setCurrentDate(): string {
    const today: Date = new Date();
    const todayString: string = today.toISOString().split('T')[0];
    return todayString;
  }
}

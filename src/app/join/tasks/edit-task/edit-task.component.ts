import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ITask} from '../task.interface';
import {TaskService} from '../task.service';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss', './edit-task.mobile.scss'],
})
export class EditTaskComponent implements OnInit {
  task!: ITask;
  isEdit: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public taskService: TaskService,
  ) {
  }

  ngOnInit() {
    const taskId: string | null = this.route.snapshot.paramMap.get('id');
    if(taskId){
      const task = this.taskService.getTask(taskId);
      if (task) {
        this.task = task;
      }
    }
  }

  onEdit(form: NgForm) {
    console.log('form', form);
    this.isEdit = true;
  }

  onClose(): void {
    this.isEdit = false;
    this.router.navigate(['/join/board']);
  }

}

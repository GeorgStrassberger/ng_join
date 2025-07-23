import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', './register.media.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)],
      }),
    });
  }

  /**
   * register User with data from the formGroup
   * @param form
   */
  onRegister(): void {
    console.log("onRegister", this.registerForm.value);
  }
}

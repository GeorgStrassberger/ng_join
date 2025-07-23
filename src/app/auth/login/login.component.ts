import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './login.media.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)],
      }),
    });
  }

  onLogin() {
    console.log("onLogin", this.loginForm.value);
  }

  onGuest() {
    console.log("onGuest", this.loginForm.value);
  }
}

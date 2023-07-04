import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pw-forgot',
  templateUrl: './pw-forgot.component.html',
  styleUrls: ['./pw-forgot.component.scss'],
})
export class PwForgotComponent {
  isSend: boolean = false;

  constructor(private router: Router) {}

  restPassword() {
    this.isSend = true;
  }

  onClose(): void {
    this.isSend = false;
    this.router.navigate(['/login']);
  }
}

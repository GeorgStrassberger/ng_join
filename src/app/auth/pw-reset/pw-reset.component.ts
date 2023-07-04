import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pw-reset',
  templateUrl: './pw-reset.component.html',
  styleUrls: ['./pw-reset.component.scss'],
})
export class PwResetComponent {
  isReset: boolean = false;
  constructor(private router: Router) {}

  onSubmit() {
    this.isReset = true;
  }

  onClose(): void {
    this.isReset = false;
    this.router.navigate(['/login']);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  daytime: string = '';
  userName: string = 'Sophia Müller';
  constructor() {
    this.greeting();
  }

  greeting(): void {
    const today = new Date();
    const now = today.getHours() * 100 + today.getMinutes();
    if (now <= 500) {
      this.daytime = 'night';
    } else if (now <= 1200) {
      this.daytime = 'morning';
    } else if (now <= 1700) {
      this.daytime = 'afternoon';
    } else {
      this.daytime = 'evening';
    }
    console.log(`Current time: ${now}`);
    console.log(`Daytime: ${this.daytime}`);
  }
}

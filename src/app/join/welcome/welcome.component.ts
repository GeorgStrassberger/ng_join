import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss', './welcome.mobile.scss'],
})
export class WelcomeComponent implements OnInit {
  daytime: string = '';
  userName: string = 'Guest';

  constructor() {}

  ngOnInit(): void {
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
  }
}

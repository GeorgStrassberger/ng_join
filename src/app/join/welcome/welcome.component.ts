import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss', './welcome.mobile.scss'],
})
export class WelcomeComponent implements OnInit {
  daytime: string = '';
  userName: string = 'Guest';

  constructor(
    private contactsService: ContactsService,
    private router: Router
  ) {
    // DUMMY object
    // this.userName = this.contactsService.contacts[0].username;
  }

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
    console.log(`Current time: ${now}`);
    console.log(`Daytime: ${this.daytime}`);
  }
}

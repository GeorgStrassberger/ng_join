import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.mobile.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMouseOver: boolean = false;
  isAuth: boolean = false;
  authStatus$!: Subscription;

  constructor(private authServcie: AuthService) {}

  ngOnInit(): void {
    this.authStatus$ = this.authServcie.authChange.subscribe((authStatus) => {
      this.isAuth = authStatus;
    });
  }

  onLogout() {
    this.authServcie.logout();
  }

  ngOnDestroy() {
    this.authStatus$.unsubscribe();
  }
}

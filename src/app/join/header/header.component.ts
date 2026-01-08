import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss', './header.mobile.scss'],
    standalone: false
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMouseOver: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onLogout() {
    console.log('onLogout');
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
  }
}

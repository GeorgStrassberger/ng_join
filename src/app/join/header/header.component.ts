import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.mobile.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMouseOver: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onLogout() {
    console.log('onLogout');
  }

  ngOnDestroy() {
  }
}

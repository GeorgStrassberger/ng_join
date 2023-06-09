import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  openMenu: boolean = false;

  onOpenMenu(): void {
    this.openMenu = !this.openMenu;
  }
}

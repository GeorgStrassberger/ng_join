import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMouseOver: boolean = false;

  // openMenu: boolean = false;

  // onOpenMenu (): void {
  //   this.openMenu = !this.openMenu;
  //   if (this.openMenu) {
  //     setTimeout(() => this.onOpenMenu(), 2000);
  //   }
  // }
}

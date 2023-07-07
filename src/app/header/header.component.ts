import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  hover = false;
  constructor(private menuservice: MenuService) {}
  burgerTouched() {
    this.menuservice.toggleMenu();
  }
}

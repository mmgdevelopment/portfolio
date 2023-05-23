import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  constructor(private menuservice: MenuService) {}
  scrollToTop() {}
  burgerTouched() {
    this.menuservice.toggleMenu();
  }
}

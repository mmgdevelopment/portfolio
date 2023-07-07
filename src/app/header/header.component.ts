import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  hover = false;
  src: string;
  constructor(private menuservice: MenuService) {
    this.src = '"./../../assets/img/logo_black.svg"';
  }
  ngOnInit(): void {
    this.renderLogo();
  }
  renderLogo() {
    if (this.hover) {
      this.src = './../../assets/img/logo_hover.svg';
    } else if (!this.hover) {
      this.src = './../../assets/img/logo_black.svg';
    }
  }
  burgerTouched() {
    this.menuservice.toggleMenu();
  }
}

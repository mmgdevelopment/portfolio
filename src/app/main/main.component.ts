import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
})
export class MainComponent implements OnInit {
  constructor(private menuservice: MenuService) {}

  ngOnInit() {
    this.menuservice.$Menu.subscribe((action) => {
      this.toggleMenu(action);
    });
  }

  toggleMenu(action: string) {
    let menuContainer = document.getElementById('menu-component');
    if (menuContainer && action === 'close') {
      this.closeMenu(menuContainer);
      return;
    }
    if (menuContainer && action === 'open') {
      this.openMenu(menuContainer);
    }
  }

  openMenu(menuContainer: HTMLElement) {
    menuContainer.style.transform = 'unset';
  }

  closeMenu(menuContainer: HTMLElement) {
    menuContainer.style.transform = 'translateY(-1050px)';
  }
}

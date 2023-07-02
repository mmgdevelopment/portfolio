import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  constructor(private menuservice: MenuService) {}
  title = 'portfolio';

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

  onActivate() {
    window.scroll(0, 0);
  }
}

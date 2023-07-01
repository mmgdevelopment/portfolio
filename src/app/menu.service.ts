import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  isOpen: boolean = false;
  $Menu = new Subject<string>();

  toggleMenu() {
    if (!this.isOpen) {
      this.$Menu.next('open');
      this.isOpen = true;
      document.body.style.overflow = 'hidden';
      return;
    }
    if (this.isOpen) {
      this.$Menu.next('close');
      this.isOpen = false;
      document.body.style.overflow = 'unset';
      return;
    }
  }
}

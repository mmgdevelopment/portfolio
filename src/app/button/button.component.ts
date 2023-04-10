import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent {
  @Input() type = '';
  @Input() disabled: boolean | null = false;

  @HostBinding('class') get class() {
    if (this.disabled) {
      return 'disabled';
    } else return '';
  }
}

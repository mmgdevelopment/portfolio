import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-single-portfolio',
  templateUrl: './single-portfolio.component.html',
  styleUrls: ['./single-portfolio.component.sass'],
})
export class SinglePortfolioComponent {
  @Input() title = '';
  @Input() tech = '';
  @Input() description = '';
  @Input() pageLink = '';
  @Input() github = '';
  @Input() img = '';
  @Input() i = 0;
  @Input() n = 0;

  @HostBinding('class') get class() {
    if (this.i % 2 !== 0) {
      return 'reverse';
    } else return '';
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  hover = false;
  src: string;
  constructor() {
    this.src = '"./../../assets/img/logo_white.svg"';
  }
  ngOnInit(): void {
    this.renderLogo();
  }
  renderLogo() {
    if (this.hover) {
      this.src = './../../assets/img/logo_hover.svg';
    } else if (!this.hover) {
      this.src = './../../assets/img/logo_white.svg';
    }
  }
}

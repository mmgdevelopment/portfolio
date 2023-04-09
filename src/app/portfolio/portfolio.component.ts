import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
})
export class PortfolioComponent {
  public projects = [
    {
      title: 'Join',
      tech: 'Angular | Typescript | HTML | CSS | Firebase ',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, cumque. Eaque eius assumenda blanditiis omnis facilis temporibus sint. ',
      pageLink: 'join.marcel-gregor.de',
      github: 'github.io/mmg/join',
      img: './assets/img/join.svg',
    },
    {
      title: 'Pokedex',
      tech: 'Angular | Typescript | HTML | CSS | Firebase ',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, cumque. Eaque eius assumenda blanditiis omnis facilis temporibus sint. ',
      pageLink: 'join.marcel-gregor.de',
      github: 'github.io/mmg/join',
      img: './assets/img/pokedex.svg',
    },
    {
      title: 'Sharkie',
      tech: 'Angular | Typescript | HTML | CSS | Firebase ',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, cumque. Eaque eius assumenda blanditiis omnis facilis temporibus sint. ',
      pageLink: 'join.marcel-gregor.de',
      github: 'github.io/mmg/join',
      img: './assets/img/sharkie.svg',
    },
    {
      title: 'CRM',
      tech: 'Angular | Typescript | HTML | CSS | Firebase ',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, cumque. Eaque eius assumenda blanditiis omnis facilis temporibus sint. ',
      pageLink: 'join.marcel-gregor.de',
      github: 'github.io/mmg/join',
      img: './assets/img/crm.svg',
    },
  ];
}

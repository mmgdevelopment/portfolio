import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass'],
})
export class SkillsComponent {
  public icons = [
    { title: 'Typescript', img: './assets/img/typescript.svg' },
    { title: 'Javascript', img: './assets/img/javascript.svg' },
    { title: 'Angular', img: './assets/img/angular.svg' },
    { title: 'HTML', img: './assets/img/html.svg' },
    { title: 'CSS', img: './assets/img/css.svg' },
    { title: 'API', img: './assets/img/api.svg' },
    { title: 'SCRUM', img: './assets/img/scrum.svg' },
    { title: 'GIT', img: './assets/img/git.svg' },
    { title: 'Material', img: './assets/img/typescript.svg' },
    { title: 'Firebase', img: './assets/img/firebase.svg' },
  ];
}

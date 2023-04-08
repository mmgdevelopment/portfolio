import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-icon',
  templateUrl: './skill-icon.component.html',
  styleUrls: ['./skill-icon.component.sass'],
})
export class SkillIconComponent {
  @Input() title = '';
  @Input() img = '';
}

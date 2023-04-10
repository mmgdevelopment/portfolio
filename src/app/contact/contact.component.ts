import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent {
  public nameValue = '';
  public mailValue = '';
  public messageValue = '';

  onSubmit() {
    console.log(this.nameValue);
  }
}

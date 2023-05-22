import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent {
  public nameValue = '';
  public mailValue = '';
  public messageValue = '';

  onSubmit(contactForm: NgForm) {
    console.log(contactForm.value);
    contactForm.form.reset();
  }
}

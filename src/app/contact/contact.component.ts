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

  async onSubmit(contactForm: NgForm) {
    console.log(this.nameValue);
    let fd = new FormData();
    fd.append('name', this.nameValue);
    fd.append(
      'message',
      'Nachricht: ' + this.messageValue + 'Absender: ' + this.mailValue
    );
    fd.append('mail', this.mailValue);
    await fetch('https://marcel-gregor.de/sendMail/send_mail.php', {
      method: 'POST',
      body: fd,
    })
      .then((res) => {
        console.log(res);
        contactForm.form.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

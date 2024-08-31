import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent implements OnInit {

  constructor(private emailservice: EmailService) {

  }

  ngOnInit(): void {

  }
  SendEmail() {

    let user = {
      name: "Amol sarkate",
      email: "amol.talnikar@gmail.com"
    }
    console.log("email service called Email : " + user.email + " name : " + user.name);
    this.emailservice.sendEmail("http://localhost:8081/sendmail", user).subscribe(
      data => {
        let res:any = data;
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  name : string | undefined;
  email : string | undefined;
  subject : string | undefined;
  body : string | undefined
  emailId : string ="akshaj.ananta.ent@gmail.com";
  constructor(private emailservice: EmailService) {

  }

  ngOnInit(): void {
    console.log("email service called ");
    this.SendEmail();
    console.log("email service call End");
  }


  SendEmail() {

    let user = {
      name: "Amol sarkate",
      email: "amol.talnikar@gmail.com"
    }
    console.log("email service called Email : " + user.email + " name : " + user.name);
    this.emailservice.sendEmail("https://mailserver-x9g9.onrender.com/sendmail", user).subscribe(
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


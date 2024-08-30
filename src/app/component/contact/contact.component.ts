import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmailService } from '../../services/email.service';

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

  constructor(private emailservice: EmailService) {

  }

  ngOnInit(): void {
 // this.register()
  }
  register() {
    let user = {
      name: "amol ",
      email:  "amol.d.sarkate@gmail.com",
      subject : "test",
      body : "test sample text"
    }
    this.emailservice.sendMail(user).subscribe(
    res => {
      console.log("Successfully ");
    },
    err => {
      console.log(err);
    }
  );

  }


}


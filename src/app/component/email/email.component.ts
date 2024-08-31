import { EmailService } from '../../services/email.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent implements OnInit {

  name : string | undefined;
  email : string | undefined;
  subject : string | undefined;
  body : string | undefined
  constructor(private  frombuilder: FormBuilder, private emailservice: EmailService) {

  }

  ngOnInit(): void {

  }
  register() {
    let user = {
      name: "amol ",
      email:  "amol.d.sarkate@gmail.com",
      subject : "test",
      body : "test sample text"
    }
  }


}

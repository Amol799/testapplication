import { Component, Input, OnInit } from '@angular/core';
// import { JsonService } from '../../../services/json.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

  mobile : string ="";
  smsOTP : string | undefined ;
  constructor(private userService: UserService){}

  ngOnInit(): void {
      // Create a new user
      // this.userService.createUser('John Doe', '7396609490', 'pashan pune');

      // this.userService.getUser();
      // Update an existing user
    //  this.userService.updateUser(1, 'Jane Doe', 'jane.doe@example.com', 'newpassword456');


  }

  Resend(event :any){

  }
  VerifyOtp(event : any){

    // console.log(this.smsOTP?.length);
    // console.log(this.mobile);




  }
  onOtpChange(event : any){
    this.smsOTP = event;
  }



}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {


  username : string = "";
  password : string ="";
  mobile : string ="";
  smsOTP : string | undefined ;
  constructor(){}

  ngOnInit(): void {

  }

  login(){
    console.log("userid : " + this.username  + "password :" + this.password)
  }

  register(){

    console.log("userid : " + this.username  + "password :" + this.password + "mobile" + this.mobile);

  }

  onOTPChange(event: any){
    this.smsOTP = event;
    console.log(this.smsOTP);
  }
  Resend(event :any){

  }
  VerifyOtp(event : any){

  }
}

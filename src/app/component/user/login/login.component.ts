import { Component, Input, OnInit } from '@angular/core';
// import { JsonService } from '../../../services/json.service';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/Auth.Service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  mobile : string ="";
  smsOTP : string | undefined ;
  otp: string | undefined ;
  constructor(private formBuilder: FormBuilder,private userService: UserService, private authsvc : AuthService){
    this.form = formBuilder.group({
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }

  get f() {
    return this.form?.controls;
  }

  ngOnInit(): void {

  }
  onSubmit() {
    console.log(this.form?.value);
  }
  Resend(event :any){
    console.log('Resending OTP to:', this.mobile);
  }
  VerifyOtp(event : any){

    event.preventDefault();
    const enteredOtp = event.target.value;
    if (this.smsOTP?.length == 4) {
      if(this.authsvc.login(this.mobile, this.smsOTP)){
        console.log('OTP verified successfully');
      } else {
        console.log('Invalid OTP');
      }
    }
  }
  onOtpChange(event : any){
    this.smsOTP = event;
    if(this.smsOTP?.length == 4){
      this.authsvc.login(this.mobile, this.smsOTP);
    }
  }
  resendOtp(){

  }



}

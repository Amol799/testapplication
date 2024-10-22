import { Component, Input, OnInit } from '@angular/core';
// import { JsonService } from '../../../services/json.service';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/Auth.Service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router'
import { Common, PaymentDetails } from '../../../model/common.model';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  mobileForm: FormGroup | undefined;
  mobile : string ="";
  smsOTP : string ="" ;
  otp: string | undefined ;
  public href: string = "";
  errorText : string = "";
  IsInvalid : boolean = false;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private usersvc: UserService,
    private authsvc : AuthService){
    if(this.authsvc.isAuthenticated()) {
     this.router.navigateByUrl('/profile');
    }
  }

  ngOnInit(): void {
    this.mobileForm = this.formBuilder.group({
      floatingInput: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]
    });
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
    this.IsInvalid = false;

    this.smsOTP = event;
  if(this.mobile != null && this.mobile != ""){
    if(this.smsOTP?.length == 4){
      PaymentDetails.mobile = this.mobile;

      this.login();
    }
    else{
      this.errorText = "OTP should be 4 digits";
      this.IsInvalid = true;
    }
  }
  else{
    this.errorText = "Please enter mobile number";
    this.IsInvalid = true;
  }
  }
  resendOtp(){

  }
  login(){
    this.authsvc.login(this.mobile, this.smsOTP).subscribe(
      (response) => {
        console.log(response);
        const user = new User();
        user.mobile = PaymentDetails.mobile;
        this.usersvc.getUserById(user).subscribe(
          (response : any) => {
            if(response.rows.length > 0){
              if(Common.retuenUrl != null ){
                this.router.navigateByUrl(Common.retuenUrl);
                Common.retuenUrl = "";
              }else{
                this.router.navigateByUrl('/home');
              }
            }
            else{
              const user: User = { id: 1,name: '',email: '',password: '',mobile: this.mobile,address: ''};
             // Call the createUser API
              this.usersvc.createUser(user)
              .subscribe(
                (response) => {
                  console.log('User created successfully:', response);
                    if(Common.retuenUrl != null ){
                      this.router.navigateByUrl(Common.retuenUrl);
                      Common.retuenUrl = "";
                    }else{
                      this.router.navigateByUrl('/home');
                    }
                 },
                (error) => {
                  console.error('Failed to create user:', error);
                }
              );

            }
          });
      },
      (error) => {
        console.error('Login failed:', error);

      }
    );
  }



}

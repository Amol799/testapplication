import { Component } from '@angular/core';
import { PaymentDetails } from '../../model/common.model';
import { AuthService } from '../../services/Auth.Service';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.model';

declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

 public user :User[] | undefined;

  constructor(private authsvc: AuthService, private usersvc: UserService){

  }
  ngOnInit() {
    if(this.authsvc.isAuthenticated()){
      const user = new User();
      user.mobile = PaymentDetails.mobile; // Assuming PaymentDetails.mobile is defined and accessible

      this.usersvc.getUserById(user).subscribe(
        (response) => {
          this.payNow();        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
      );
    }
  }
  payNow() {
    const RozarpayOptions = {
      description: 'Sample Razorpay demo',
      currency: 'INR',
      amount: PaymentDetails.total * 100,
      name: 'Amol Sarkate',
      key: 'rzp_live_nnXoCuPcu9KB30',
      image: 'https://www.c-sharpcorner.com/UploadFile/AuthorImage/71c5a720180404015151.jpg',
      prefill: {
        name: 'Amol Sarkate',
        email: 'Amol.d.sarkate@gmail.com',
        phone: PaymentDetails.mobile
      },
      theme: {
        color: '#6466e3'
      },
      modal: {
        ondismiss:  () => {
          console.log('dismissed')
        }
      }
    }

    const successCallback = (paymentid: any) => {
      console.log(paymentid);
    }

    const failureCallback = (e: any) => {
      console.log(e);
    }

    Razorpay.open(RozarpayOptions,successCallback, failureCallback)
  }
}

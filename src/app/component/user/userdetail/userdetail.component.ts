import { Component } from '@angular/core';
import { AuthService } from '../../../services/Auth.Service';
import { Router } from '@angular/router';
import { User } from '../../../model/user.model';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { PaymentDetails } from '../../../model/common.model';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrl: './userdetail.component.css'
})
export class UserdetailComponent {
  userForm! : FormGroup;


  constructor(private authsvc: AuthService, private router: Router, private formBuilder: FormBuilder, private usersvc : UserService){
    this.userForm = this.formBuilder.group({
      mobile: ['7396609490', [ValidatePhone,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      postalcode : ['', [Validators.required,Validators.pattern("^[1-9][0-9]{5}$")]]
    });
  }

  ngOnInit(): void {
    const user = new User();
      user.mobile = PaymentDetails.mobile;

    this.usersvc.getUserById(user).subscribe(
      (response : any) => {
        if(response.rows.length > 0){
          const userData = response.rows[0]; // Assuming the user data is in the first row

          this.userForm.patchValue({
            mobile: userData.mobile,
            name: userData.name,
            email: userData.email,
            address: userData.address,
            postalcode: userData.postalcode
          });
        }
      });

  }
  saveForm(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Phone Number', form.value.phone);
    if (this.userForm.valid) {

      const user: User = { id: 1,name: form.value.name ,email: form.value.email ,password: form.value.password ,mobile: form.value.phone ,address: form.value.address};
      this.usersvc.updateUser(user)
      .subscribe(
        (response) => {
          this.router.navigate(['/payment']);
         },
        (error) => {
          console.error('Failed to create user:', error);
        }
      );

      // Save the form data
      console.log(this.userForm.value);
    } else {
      // Handle form validation errors
      console.log('Form is invalid');
    }
  }

  onSubmit(){
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
      // You can perform any necessary actions here, such as sending the form data to a server.
    } else {
      console.log('Form is invalid:', this.userForm);
    }
  }
  Cancel(){
    // logout the user detail
    this.authsvc.logout();
    // Navigate to the login page or any other appropriate page after logout
      this.router.navigate(['/login']);

    // Reset any form data or state that may have been affected by the logout operation
    // Example: this.resetForm();

    // Clear any temporary data or variables that may have been created during the logout process
    // Example: this.tempData = null;

    // Perform any necessary cleanup or navigation actions here
  }
}
function ValidatePhone(control: AbstractControl): {[key: string]: any} | null  {
  if (control.value && control.value.length != 10) {
    return { 'phoneNumberInvalid': true };
  }
  return null;
}

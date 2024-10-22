import { Component } from '@angular/core';
import { AuthService } from '../../../services/Auth.Service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private authsvc: AuthService,private router: Router){

  }
  logout(){
    this.authsvc.logout();
    this.router.navigateByUrl('/login');
  }
}

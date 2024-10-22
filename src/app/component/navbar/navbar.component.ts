import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/Auth.Service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  tatalCartItem : number = 0;
  profileRoutingUrl : string = '/login'

  constructor(private cartsvc:CartService,private authsvc : AuthService){}

  ngOnInit(): void {
    this.cartsvc.getProducts().subscribe(
      res =>{
         this.tatalCartItem = res.length;
      }
    )
    if(this.authsvc.isAuthenticated()) {
      this.profileRoutingUrl = '/navbar'
    }
  }

  showCart(){

  }
  logout(){
    this.authsvc.logout();
    this.profileRoutingUrl = '/login'
  }
}

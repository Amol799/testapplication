import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  tatalCartItem : number = 0;

  constructor(private cartsvc:CartService){}

  ngOnInit(): void {
    this.cartsvc.getProducts().subscribe(
      res =>{

         this.tatalCartItem = res.length;
      }
    )
  }

  showCart(){

  }
}

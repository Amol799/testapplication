import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  totalCartItem : number =0;
  constructor(private cartsvc: CartService){}

  ngOnInit(): void {
    this.cartsvc.getProducts().subscribe(
      res =>{
         this.totalCartItem = res.length;
      }
    )
    throw new Error('Method not implemented.');
  }

}

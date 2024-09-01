import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarouselModel } from '../../model/carousselmodel';
import { EmailService } from '../../services/email.service';
import { error } from 'console';
import { Cart } from '../../model/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  cartTxt : string = "Add to Cart";
  constructor(private cartsvc : CartService){

  }

  updatedProduct() {

  }
  addToCart(Item : any){
    this.cartsvc.addToCart(Item);
    Cart.count = Cart.count+ 1;
    Item.target.innerHTML = "See Cart";
  }

}

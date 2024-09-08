import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  public productList : any;
  totalCartItem : number =0;
  grandTotal : number =0;
  constructor(private cartsvc: CartService){}

  ngOnInit(): void {
    this.getCartProducts();
  }
  getCartProducts(){
    this.cartsvc.getProducts().subscribe(
      res =>{
        this.grandTotal = 0;
         this.productList = res;
         this.totalCartItem = res.length;

         this.productList.map((a:any) => {
          this.grandTotal += Math.round( (a.mrpprice - (a.mrpprice/100 * a.discount)) * a.cartCount);

        })

      }
    )
  }
  UpdatePlusCart(item : any){
    item.cartCount =  item.cartCount-1
    this.getCartProducts();
  }

  UpdateMinusCart(item : any){
    item.cartCount =  item.cartCount+1
    this.getCartProducts()

  }
  DeleteItemFromCart(item : any){
    this.cartsvc.removeCartItem(item);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit {

  cartTxt :string ="Add to cart"
  public productList : any;
  constructor(private commnsvc : CommonService,private cartsvc: CartService){

  }
  ngOnInit(): void {
     this.commnsvc.getAllProduct().subscribe(data =>{
       this.productList = data;
     })
  }

  addToCart(item : any , event : any){
    this.cartsvc.addToCart(item);
    event.target.innerHTML = "See Cart";
    console.log("event");
  }
}

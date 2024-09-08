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
  public disable : boolean = true
  public isCartVisible : boolean = true;
  constructor(private commnsvc : CommonService,private cartsvc: CartService){

  }
  ngOnInit(): void {
    this.GetAllProduct();
  }

  addToCart(item : any , event : any){
     if(this.isCartVisible){
      //item.mainbtnlabel = "See Cart";
      this.cartsvc.addToCart(item);
      this.isCartVisible  = true;
      event.target.innerHTML = "See Cart";
      // this.GetAllProduct();
     }
  }
  GetAllProduct(){
    this.commnsvc.getAllProduct().subscribe(data =>{
      this.productList = data;
    })
  }
}

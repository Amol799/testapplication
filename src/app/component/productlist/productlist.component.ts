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
     this.commnsvc.getAllProduct().subscribe(data =>{
       this.productList = data;
     })
  }

  addToCart(item : any , event : any){
    // this.productList.map((a:any, index:any) => {
    //   if(item.id == a.id){
    //     this.isCartVisible = true;
    //   }
    // });
    //this.checkExistInCart(item)

     if(this.isCartVisible){
      this.cartsvc.addToCart(item);
      this.isCartVisible  = true;
      console.log("event");
      event.target.innerHTML = "See Cart";
     }
  }

  // checkExistInCart(cartItem:any) {
  //   var exist=this.productList.some((item : any) =>{
  //     if(item.id.includes(cartItem.id)){
  //       this.isCartVisible= true;
  //     }
  //   });
  // }
}

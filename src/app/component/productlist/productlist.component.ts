import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { CartService } from '../../services/cart.service';
import { Common } from '../../model/cart.model';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit {
  //public productList : any ;
  public disable : boolean = true
  public isCartVisible : boolean = true;
  constructor(private commnsvc : CommonService,private cartsvc: CartService){

  }
  ngOnInit(): void {
    this.GetAllProduct();
  }

  addToCart(item : any , event : any){
     if(this.isCartVisible){
      item.mainbtnlabel = "See Cart";
      this.cartsvc.addToCart(item);
      this.isCartVisible  = true;
   //   event.target.innerHTML = "See Cart";
      // this.GetAllProduct();
     }
  }
  GetAllProduct(){
    this.commnsvc.getAllProduct().subscribe(data =>{
      Common.productList = data;
      //this.productList = Common.productList;
    })

  }
  get productList() {
    return Common.productList;
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarouselModel } from '../../model/carousselmodel';
import { EmailService } from '../../services/email.service';
import { error } from 'console';
import { CartService } from '../../services/cart.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  public productList : any =[];

  constructor(private cartsvc : CartService, private commnsvc: CommonService){

  }
  ngOnInit(): void {
    this.commnsvc.getAllProduct().subscribe(
      data =>{
       data.map((item:any, index:any) => {
        if(item.mianProduct == true){
          this.productList.push(item);
        }
      });
      ;
    })
  }

  updatedProduct() {

  }

  addToCart(item : any , event : any){
    this.cartsvc.addToCart(item);
    event.target.innerHTML = "See Cart";
  }

}

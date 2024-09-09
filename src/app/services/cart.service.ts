import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  public cartItemList : any =[];
  public productList  = new BehaviorSubject<any>([]);
  public isProdAvalInCart : boolean = false;
  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product :any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addToCart(product : any){
    this.cartItemList.map((a: any, index: any) => {
      if(JSON.stringify(a) === JSON.stringify(product)){
       this.isProdAvalInCart = true;
      }
    });

    if(!this.isProdAvalInCart){
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
    }
    this.isProdAvalInCart= false;
  }
  getTotalPrice(){
    let grandtotal = 0;
    this.cartItemList.map((a:any) => {
      grandtotal += a.total;
    })
  }
  removeCartItem(product :any){
    this.cartItemList.map((a:any, index:any) => {
      if(product.id == a.id){
        this.cartItemList.splice(index,1);
      }
    });
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList= [];
    this.productList.next(this.cartItemList);
  }
}

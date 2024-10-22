import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Common } from '../../model/cart.model';
import { PaymentDetails } from '../../model/common.model';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/Auth.Service';
import { User } from '../../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  public productList : any;
  totalCartItem : number =0;
  grandTotal : number =0;
  user : User[] | undefined;
  constructor(private cartsvc: CartService , private usersvc  : UserService , private authsvc  : AuthService, private router: Router){}

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
          PaymentDetails.total = this.grandTotal;
        })
      }
    )
  }
  UpdatePlusCart(item : any){
    item.cartCount =  item.cartCount+1
    this.getCartProducts();
  }

  UpdateMinusCart(item : any){
  if(item.cartCount > 1 ){
    item.cartCount =  item.cartCount-1
    this.getCartProducts();
  }

  }

  DeleteItemFromCart(item : any){
    Common.productList.map((product: any, index: any) => {
      if(JSON.stringify(product) === JSON.stringify(item)){
        product.mainbtnlabel = "Add cart";
      }
    });
    this.cartsvc.removeCartItem(item);
  }
  getUserDetails(event : any){
    if(this.authsvc.isAuthenticated()){
      const user = new User();
      user.mobile = PaymentDetails.mobile;
      this.usersvc.getUserById(user).subscribe(
        (response : any) => {
          if(response.rows.length > 0){
            if(response.rows[0].address == null || response.rows[0].address == undefined || response.rows[0].address == ""){
              this.router.navigate(['/userdetails']);
            }else{
              this.router.navigate(['/userdetails']);
            }
          }
          else{
            this.authsvc.logout();
            this.router.navigate(['/login']);
          }

          this.user = [response]; // Assuming the API returns a single user
        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
      );
    }
  }
}

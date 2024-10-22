import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { BlogComponent } from './component/blog/blog.component';
import { AboutComponent } from './component/about/about.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { CartComponent } from './component/cart/cart.component';
import { AuthGuard } from './gaurd/auth.gaued';
import { LoginComponent } from './component/user/login/login.component';
import { RegistrationComponent } from './component/user/registration/registration.component';
import { ProfileComponent } from './component/user/profile/profile.component';
import { PaymentComponent } from './component/payment/payment.component';
import { NavbarComponent } from './component/user/navbar/userNavbar.component';
import { profile } from 'console';
import { UserdetailComponent } from './component/user/userdetail/userdetail.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'*', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'blog', component:BlogComponent},
  {path:'about', component:AboutComponent},
  {path:'products', component:ProductlistComponent },
  {path:'cart', component:CartComponent  },
  {path:'login', component:RegistrationComponent},
  {path:'profile', component:ProfileComponent},

  {path:'navbar', component:NavbarComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegistrationComponent},
  {path:'profile', component:ProfileComponent},
  {path:'payment', component:PaymentComponent},

  //user registration
  {path: 'userdetails', component: UserdetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

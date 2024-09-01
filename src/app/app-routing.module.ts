import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { BlogComponent } from './component/blog/blog.component';
import { AboutComponent } from './component/about/about.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { CartComponent } from './component/cart/cart.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'*', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'blog', component:BlogComponent},
  {path:'about', component:AboutComponent},
  {path:'products', component:ProductlistComponent},
  {path:'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

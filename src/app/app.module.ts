import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProductComponent } from './component/product/product.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { CustomerreviewComponent } from './component/customerreview/customerreview.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { BlogComponent } from './component/blog/blog.component';
import { NewsletterComponent } from './component/newsletter/newsletter.component';
import { FeatureComponent } from './component/feature/feature.component';
import { EmailComponent } from './component/email/email.component';
import { EmailService } from './services/email.service';
import { CommonService } from './services/common.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './component/cart/cart.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    ProductlistComponent,
    CustomerreviewComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    NewsletterComponent,
    FeatureComponent,
    EmailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    CommonModule
  ],
  providers: [
    EmailService,
    CommonService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

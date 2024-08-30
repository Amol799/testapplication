import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

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
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(),
    EmailService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

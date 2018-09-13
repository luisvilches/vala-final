import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes'
import {ScrollToModule} from 'ng2-scroll-to';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { ServicesHomeComponent } from './services-home/services-home.component';
import { ThreeHomeComponent } from './three-home/three-home.component';
import { ProcessHomeComponent } from './process-home/process-home.component';
import { PortfolioHomeComponent } from './portfolio-home/portfolio-home.component';
import { PricingHomeComponent } from './pricing-home/pricing-home.component';
import { ClientesHomeComponent } from './clientes-home/clientes-home.component';
import { FooterComponent } from './footer/footer.component';
import { PostFooterComponent } from './post-footer/post-footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalContactComponent } from './modal-contact/modal-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFountComponent } from './not-fount/not-fount.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderHomeComponent,
    ServicesHomeComponent,
    ThreeHomeComponent,
    ProcessHomeComponent,
    PortfolioHomeComponent,
    PricingHomeComponent,
    ClientesHomeComponent,
    FooterComponent,
    PostFooterComponent,
    NavbarComponent,
    ModalContactComponent,
    NotFountComponent
  ],
  imports: [
    BrowserModule,
    routes,
    BrowserAnimationsModule,
    ScrollToModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

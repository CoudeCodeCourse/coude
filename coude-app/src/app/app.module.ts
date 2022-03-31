import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from '@angular/router';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    LandingComponent,
    WhoWeAreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     RouterModule.forRoot([
      { path: 'landing', component: LandingComponent },
      { path: '**', redirectTo: 'landing' },
      { path: 'contact', component: ContactComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

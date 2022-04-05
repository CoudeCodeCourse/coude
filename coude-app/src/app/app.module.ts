import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ForumMainComponent } from './forum-main/forum-main.component';
import { ForumViewtopicComponent } from './forum-viewtopic/forum-viewtopic.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from '@angular/router';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    ForumMainComponent,
    ForumViewtopicComponent,
    LandingComponent,
    WhoWeAreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     RouterModule.forRoot([
      { path: 'landing', component: LandingComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: 'landing' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

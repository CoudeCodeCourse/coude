import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
// import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ForumMainComponent } from './forum-main/forum-main.component';
import { ForumViewtopicComponent } from './forum-viewtopic/forum-viewtopic.component';
import { LandingComponent } from './landing/landing.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { Header1Component } from './header1/header1.component';
import { HomepageComponent } from './homepage/homepage.component';


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
    Header1Component,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     RouterModule.forRoot([
      { path: 'landing', component: LandingComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'header', component: HeaderComponent },
      { path: 'homepage', component: HomepageComponent },
      { path: '**', redirectTo: 'landing' },
    ]),
    MdbCollapseModule,
    // MdbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

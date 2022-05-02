import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ForumMainComponent } from './forum-main/forum-main.component';
import { ForumViewtopicComponent } from './forum-viewtopic/forum-viewtopic.component';
import { LandingComponent } from './landing/landing.component';
import { CatalogComponent } from './catalog/catalog.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { Header1Component } from './header1/header1.component';
import { StudyComponent } from './study/study.component';


@NgModule({
  declarations: [
    AppComponent,
   HeaderComponent,
    ContactComponent,
    FooterComponent,
    ForumMainComponent,
    ForumViewtopicComponent,
    LandingComponent,
    CatalogComponent,
    WhoWeAreComponent,
    Header1Component,
    StudyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     RouterModule.forRoot([
      { path: 'landing', component: LandingComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'header', component: HeaderComponent },
      { path: 'header1', component: Header1Component },
      { path: '**', redirectTo: 'landing' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

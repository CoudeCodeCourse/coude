import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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

import { TestComponent } from './test/test.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EnrollCourseComponent } from './enroll-course/enroll-course.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminCourseDetailsComponent } from './admin-course-details/admin-course-details.component';



import {SearchFilterPipe} from '../pipes/searchFilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
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
    TestComponent,
    HomepageComponent,
    EnrollCourseComponent,
    AdminHomeComponent,
    AdminCourseDetailsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
     RouterModule.forRoot([
      { path: 'landing', component: LandingComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'header', component: HeaderComponent },
      { path: 'homepage', component: HomepageComponent },


      { path: 'adminCourseDetails', component: AdminCourseDetailsComponent },
      { path: 'admin', component: AdminHomeComponent },

      { path: '**', redirectTo: 'landing' },
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

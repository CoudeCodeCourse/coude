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
import { TestComponent } from './test/test.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminCourseDetailsComponent } from './admin-course-details/admin-course-details.component';
import { FeedbackComponent } from './feedback/feedback.component';

import {SearchFilterPipe} from '../pipes/searchFilter.pipe';
import { CompletedCourseComponent } from './completed-course/completed-course.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    ForumMainComponent,
    ForumViewtopicComponent,
    FeedbackComponent,
    LandingComponent,
    CatalogComponent,
    WhoWeAreComponent,
    Header1Component,
    TestComponent,
    HomepageComponent,
    AdminHomeComponent,
    AdminCourseDetailsComponent,
    CompletedCourseComponent,
    
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
      { path: 'adminCouseDetails', component: AdminCourseDetailsComponent },
      { path: 'forum', component: ForumMainComponent },
      { path: 'forum-viewtopic', component: ForumViewtopicComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'completed-course', component: CompletedCourseComponent },
      { path: '**', redirectTo: 'landing' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

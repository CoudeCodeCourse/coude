import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
//các compoment của app
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
import { ScheduleComponent } from './schedule/schedule.component';
import { MyCourseComponent } from './my-course/my-course.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdUpCourseComponent } from './ad-up-course/ad-up-course.component';
import { BillingComponent } from './billing/billing.component';


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
    AdminCourseDetailsComponent,
    ScheduleComponent,
    MyCourseComponent,
    LoginComponent,
    PageNotFoundComponent,
    AdUpCourseComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
     RouterModule.forRoot([
      { path: '', redirectTo: 'landing', pathMatch: 'full'},
      { path: 'contact', component: ContactComponent },
      { path: 'landing', component: LandingComponent },
      { path: 'header', component: HeaderComponent },
      { path: 'home', component: HomepageComponent },
      { path: 'admin/courses/:id', component: AdminCourseDetailsComponent },
      { path: 'admin', component: AdminHomeComponent },
      { path: 'login', component: LoginComponent},
      { path: 'whoweare', component: WhoWeAreComponent},
      { path: 'uploadcourse', component: AdUpCourseComponent },
       

      //tất cả các path đều phải nằm trên path của PageNotFound
      { path: '**', component: PageNotFoundComponent},
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

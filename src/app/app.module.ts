import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
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
// import { Header1Component } from './header1/header1.component';
import { StudyComponent } from './study/study.component';

import { TestComponent } from './test/test.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EnrollCourseComponent } from './enroll-course/enroll-course.component';


// import { AdminHomeComponent } from './admin-home/admin-home.component';
// import { AdminCourseDetailsComponent } from './admin-course-details/admin-course-details.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CompletedCourseComponent } from './completed-course/completed-course.component';
// import { AdminStudentComponent } from './admin-student/admin-student.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
// import { AdminStudent1Component } from './admin-student1/admin-student1.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MyCourseComponent } from './my-course/my-course.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { AdUpCourseComponent } from './ad-up-course/ad-up-course.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { AssignmentFbComponent } from './assignment-fb/assignment-fb.component';
import { AssignmentStartComponent } from './assignment-start/assignment-start.component';
import { CourseFilterPipe} from '../pipes/courseFilter.pipe';
import { CourseFilter2Pipe} from '../pipes/courseFilter2.pipe';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { ForumFilterPipe} from '../pipes/forumFilter.pipe';
import { GeneralInformationComponent } from './general-information/general-information.component';


import { UpdateInformationComponent } from './update-information/update-information.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BillingComponent } from './billing/billing.component';
import { CatalogDetailComponent } from './catalog-detail/catalog-detail.component';

import {ForumFilterPipe} from '../pipes/forumFilter.pipe';
import {ForumSortPipe} from '../pipes/forumSort.pipe';
import {SearchFilterPipe} from '../pipes/searchFilter.pipe';
import {CourseFilterPipe} from '../pipes/courseFilter.pipe';
import {CourseFilter2Pipe} from '../pipes/courseFilter2.pipe';
// import { AdminRoutingComponents } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { AdminStudentComponent } from './admin-student/admin-student.component';
// import { NgbdSortableHeader } from 'src/directives/sortable.directive';


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
    // Header1Component,
    StudyComponent,
    TestComponent,
    HomepageComponent,
    EnrollCourseComponent,
    ScheduleComponent,
    MyCourseComponent,
    LoginComponent,
    PageNotFoundComponent,
    SidebarComponent,
    AssignmentComponent,
    AssignmentFbComponent,
    AssignmentStartComponent,
    CourseFilterPipe, 
    CourseFilter2Pipe,
    GeneralInformationComponent,
    // AdUpCourseComponent,
    CompletedCourseComponent,
    // AdminStudentComponent,
    TextEditorComponent,
    ForumFilterPipe,
    AdminStudent1Component,
    ForumSortPipe,
    // AdminStudent1Component,
    GeneralInformationComponent,
    UpdateInformationComponent,
    SignUpComponent,
    BillingComponent,
    CatalogDetailComponent,
    
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
    ReactiveFormsModule,
    AdminModule,
     RouterModule.forRoot([
      { path: '', redirectTo: 'landing',  pathMatch: 'full' },
      { path: 'contact', component: ContactComponent },
      { path: 'landing', component: LandingComponent },
      { path: 'header', component: HeaderComponent },
      { path: 'home', component: HomepageComponent },
      { path: '/enroll/courses/study/:id', component: StudyComponent},
      { path: 'homepage', component: HomepageComponent },
      { path: 'forum', component: ForumMainComponent },
      { path: 'forum/:id', component: ForumViewtopicComponent },
      { path: 'view-topic/:id', component: ForumViewtopicComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'completed-course', component: CompletedCourseComponent },
      { path: 'admin/student', component: AdminStudentComponent },
      { path: 'login', component: LoginComponent},
      { path: 'whoweare', component: WhoWeAreComponent},
      // { path: 'uploadcourse', component: AdUpCourseComponent },
      { path: 'sidebar', component: SidebarComponent },
      { path: 'assignment', component: AssignmentComponent },
      { path: 'assignmentfb', component: AssignmentFbComponent },
      { path: 'assignmentstr', component: AssignmentStartComponent },
      { path: 'catalog', component: CatalogComponent },  
      { path: 'generalinformation', component: GeneralInformationComponent },  
      { path: 'update-information', component: UpdateInformationComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'billing', component: BillingComponent },
      
      { path: 'catalogdetails', component: CatalogDetailComponent },
      { path: 'enroll/:id', component: EnrollCourseComponent },



      //tất cả các path đều phải nằm trên path của PageNotFound
      { path: '**', component: PageNotFoundComponent},
    ]),
  
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCourseDetailsComponent } from '../admin-course-details/admin-course-details.component';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { AdminStudentComponent } from '../admin-student/admin-student.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {path: 'admin', component: AdminHomeComponent},
  {path: 'admin/courses/:id', component: AdminCourseDetailsComponent},
  {path: 'admin/header', component: AdminComponent},
  {path: 'admin/courses/student', component: AdminStudentComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

export const AdminRoutingComponents = [
    AdminHomeComponent, 
    AdminCourseDetailsComponent]



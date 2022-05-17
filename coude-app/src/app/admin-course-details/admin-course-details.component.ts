import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Course } from 'src/models/course';
import { CoursesDataService } from '../services/courses-data.service';
import { Title } from '@angular/platform-browser';
// import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-admin-course-details',
  templateUrl: './admin-course-details.component.html',
  styleUrls: ['./admin-course-details.component.css'],
  providers: [Title]
})
export class AdminCourseDetailsComponent implements OnInit {
  courses: Array<Course> = []; 
  // courses!: Course[];
  errMessage = "";
  // courseDetails: any;
  selectedId: any;
  selectedCourse!: Course;
  constructor(private _activeRoute: ActivatedRoute,
              private _router: Router,
              private _service: CoursesDataService,
              private _title: Title) { 
             
              //   this._activeRoute.queryParams.subscribe(params => {
              //         this.selectedCourse = params;
              //         console.log("tiel:",this.selectedCourse); // Print the parameter to the console. 
              //     });
        this._activeRoute.params.subscribe((params)=>{
                this.selectedId = params['id'];
                console.log(this.selectedId);
              })     

  }


  ngOnInit(): void {
    this.getCoursesById();
    // this._title.setTitle(this.selectedCourse.title);
    this._title.setTitle(this.selectedCourse.title);
    console.log(this._title);
  }

  getCoursesById(){
    this._service.GetCourseById(this.selectedId).subscribe(
      {
      next: data => this.selectedCourse = data,
      error: err => this.errMessage = err
    }
    // res => {
    //   this.selectedCourse = res;
    // }
    );
    console.log("selected course: ",this.selectedCourse);
  }
  // getCourses(){
  //   const id = this._activeRoute.snapshot.paramMap.get('id');
  //   console.log("id:",id)
  //   this._service.getACourse(id).subscribe(
  //     course => this.selectedCourse = course
  //   )
  //   console.log(this.selectedCourse)
  // }

  goBack(): void {
    this._router.navigate(['/admin/courses', {id: this.selectedId}])
  }
  GoToLearnPage(){
    this._router.navigate(['/admin/student'])
  }
}

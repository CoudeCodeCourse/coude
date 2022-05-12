import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Course } from 'src/models/course';
import { CoursesDataService } from '../services/courses-data.service';

@Component({
  selector: 'app-admin-course-details',
  templateUrl: './admin-course-details.component.html',
  styleUrls: ['./admin-course-details.component.css']
})
export class AdminCourseDetailsComponent implements OnInit {
  courses: any;
  errMessage = "";
  // courseDetails: any;
  selectedId: any;
  selectedCourse: any;
  constructor(private _activeRoute: ActivatedRoute,
              private _router: Router,
              private _service: CoursesDataService,) { }

  ngOnInit(): void {
      // this.getCourses();
             // this.selectedCourse = {...param.keys, ...param};
          // this.selectedCourse = param;
          // console.log("nnene", this.selectedCourse)
      this._activeRoute.paramMap.subscribe(
        (param) => {
          let id = param.get('id');
          // let course = {...param.keys, ...param};
          if (id != null){
            this.selectedId = Number(id);
            console.log("id là: ",this.selectedId, typeof(this.selectedId));
            // this.selectedCourse = course;
            // console.log("nnene", this.selectedCourse)
          }
        })
        // this.selectedCourse = this._activeRoute.snapshot.params
        // console.log("nnene", this.selectedCourse)
        this.getCourses();
        this.getSelectedCourse();
        // console.log("id", this.selectedId)
        
  }
  getCourses(){
    this._service.getCourses().subscribe({
      next: data => this.courses = data,
      error: err => this.errMessage = err
    })
    
    console.log("list courses: ",this.courses, typeof(this.courses))
  }
  // getCourses(){
  //   const id = this._activeRoute.snapshot.paramMap.get('id');
  //   console.log("id:",id)
  //   this._service.getACourse(id).subscribe(
  //     course => this.selectedCourse = course
  //   )
  //   console.log(this.selectedCourse)
  // }
  getSelectedCourse(){
    this.selectedCourse = this.courses.filter((c: any) => {
       return Number(c._id) == this.selectedId} );
      // for(let i = 0; i<this.courses.length; i++){
      //   console.log(this.courses[i])
      //   if (this.courses[i]._id === this.selectedId){
      //     this.selectedCourse = this.courses[i]; break;
      //   }
      // }
    console.log("selected là:", this.selectedCourse);
    // return this.selectedCourse;
  }

  goBack(): void {
    this._router.navigate(['/admin/courses', {id: this.selectedId}])
  }
}

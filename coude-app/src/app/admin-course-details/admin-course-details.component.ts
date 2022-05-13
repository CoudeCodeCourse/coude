import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Course } from 'src/models/course';
import { CoursesDataService } from '../services/courses-data.service';
// import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-admin-course-details',
  templateUrl: './admin-course-details.component.html',
  styleUrls: ['./admin-course-details.component.css']
})
export class AdminCourseDetailsComponent implements OnInit {
  courses: Array<Course> = []; 
  // courses!: Course[];
  errMessage = "";
  // courseDetails: any;
  selectedId: any;
  selectedCourse: any;
  constructor(private _activeRoute: ActivatedRoute,
              private _router: Router,
              private _service: CoursesDataService,) { 
                // this._activeRoute.queryParams.subscribe(params => {
                //   // .filter(params => params.course)
                //   // .subscribe(params => {
                //     // let id = param.get('id');
                //     // let course = {...param.keys, ...param};
                //     // this.selectedCourse._id = params['_id'];
                //     // this.selectedCourse.title = params['title'];
                //     // this.selectedCourse.atc = params['atc'];
                //     // this.selectedCourse = new Course();
                //     this.selectedCourse = params["course"];
                //     console.log("courses:",this.selectedCourse); // Print the parameter to the console. 
                //     console.log(params); 
                //   })
                this._activeRoute.queryParams.subscribe(params => {
                      this.selectedCourse = params;
                      console.log("tiel:",this.selectedCourse); // Print the parameter to the console. 
                  });
              }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params)=>{
      // console.log(typeof(params['id']))
      this.selectedId = params['id'];
      console.log(this.selectedId);
    })
      // this.getCourses();
             // this.selectedCourse = {...param.keys, ...param};
          // this.selectedCourse = param;
          // console.log("nnene", this.selectedCourse)
   
        // console.log(this._activeRoute.snapshot.params['course']);
        
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
    
    console.log(this.courses)
    console.log("Array", Array.isArray(this.courses))
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
    // console.log(this.courses)
    this.selectedCourse = this.courses.filter((c: Course) => {
       return String(c._id) == this.selectedId} );
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
  GoToLearnPage(){
    this._router.navigate(['/admin/student'])
  }
}

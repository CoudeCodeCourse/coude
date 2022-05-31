import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Course } from 'src/models/course';
import { CoursesDataService } from '../services/courses-data.service';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { AdminModule } from '../admin/admin.module';
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
  selectedId: any;
  selectedCourse!: Course;
   show = true;
  isCourseHide!: boolean;
  selectedLesson: any;
  // public formCourse = this._formBuilder.group({
  //   title: [this.selectedCourse.title, 
  //     [Validators.required, Validators.minLength(10)]],
  //   instructor: [this.selectedCourse.instructor, Validators.required],
  //   descript: [this.selectedCourse.hiw, Validators.required],
  //   fee: [this.selectedCourse.fee, Validators.required],
  //   languages: [this.selectedCourse.languages, Validators.required],
  //   lesson1: []
  // })

  constructor(private _activeRoute: ActivatedRoute,
              private _router: Router,
              private _service: CoursesDataService,
              private _title: Title,
              private _formBuilder: FormBuilder) { 
             
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
    this.getCourseById();
    // this._title.setTitle(this.selectedCourse.title);
    this._title.setTitle(this.selectedCourse.title);
    console.log(this._title);
  }

  getCourseById(){
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
  switchMode(){
    this.show = !this.show; 
  }
  saveChanges(form: NgForm){
    console.log("Form data", form.value);
    // form.value.languages = form.value.languages.split(',');
    // console.log(form.value.languages);
    // console.log("Form data2", form.value);

    this._service.updateCourse(this.selectedCourse._id, this.selectedCourse).subscribe(res => {
      let resData = JSON.parse(JSON.stringify(res));
      if(resData.message === 'success'){
        alert("Update!");
        this.getCourseById();
        this.switchMode();
      }
      else{
        alert("Error");
      }
    })
  }
  hideCourse(){
    this._service.hideCourse(this.selectedCourse._id, this.selectedCourse).subscribe(res => {
      let resData = JSON.parse(JSON.stringify(res));
      if(resData.message === 'success'){
        alert("You hid the course!");
        // this.getCoursesById();
        // this.show = true;
      }
      else{
        alert("Error");
      }
    })
  }
  showCourse(){
    this._service.showCourse(this.selectedCourse._id, this.selectedCourse).subscribe(res => {
      let resData = JSON.parse(JSON.stringify(res));
      if(resData.message === 'success'){
        alert("You made this course available again. Now learners can get access to it!");
      }
      else{
        alert("Error");
      }
    })
  }
  getStatusOfCourse(){
    if (this.selectedCourse.status == "hidden"){
      this.isCourseHide = true;
    } else {
      this.isCourseHide = false;
    }
    console.log("status", this.isCourseHide);
  }
  onSelect(lesson: any){
    this.selectedLesson = lesson;
  }
}











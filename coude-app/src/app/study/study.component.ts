import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Course } from 'src/models/course';
import { CoursesDataService } from '../services/courses-data.service';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {
  courses: Array<Course> = []; 
  errMessage = "";
  selectedId: any;
  public selectedCourse!: Course;

  constructor(private _activeRoute: ActivatedRoute,
    private _router: Router,
    private _service: CoursesDataService) { 
      this._activeRoute.params.subscribe((params)=>{
      this.selectedId = params['id'];
      console.log(this.selectedId);
    })}

  ngOnInit(): void {
    this.getCourseById();
  }
  getCourseById(){
    this._service.GetCourseById(this.selectedId).subscribe(
      {
      next: data => this.selectedCourse = data,
      error: err => this.errMessage = err
    }
    );
    console.log("selected course: ",this.selectedCourse);
  }

}

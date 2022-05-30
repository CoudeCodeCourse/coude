import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/models/course';
import { CoursesDataService } from '../services/courses-data.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  courses!: Course[];
  errMessage = "";
  selectedId: any;
  selectedCourse: any;
  constructor(private _service: CoursesDataService,
              private _router: Router,
              private _activeRouter: ActivatedRoute) { 
              //   this._activeRouter.queryParams.subscribe(params => {
              //     this.selectedCourse = params;
              //     console.log("tiel:",this.selectedCourse); // Print the parameter to the console. 
              // });
              }

  ngOnInit(): void {
    this.getCourses();
    // this.getCourseId();
    // console.log("cous:",this.courses)
  }

  getCourses(){
    this._service.getCourses().subscribe({
      next: data => this.courses = data,
      error: err => this.errMessage = err
    })
    console.log("cou",this.courses);
  }

  onSelected(course: Course){
    this._router.navigate(['/admin/courses', course._id])
  }
}

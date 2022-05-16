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
              private _activeRouter: ActivatedRoute) { }

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
  }
  // getCourseId(){
  //   this._activeRouter.paramMap.subscribe(
  //     (param) => {
  //       let id = param.get('id');
  //       // let course = {...param.keys, ...param}
  //       if (id != null){
  //         // this.selectedId = parseInt(id);
  //       this.selectedCourse = param.get('course');          
  //       console.log("sâsa", this.selectedCourse)
  //       }
  //     }
  //   )
  // }
  onSelected(data: Course){
    // console.log(data._id);
    // console.log(data._id);
    this._router.navigate(['/admin/courses', data._id])
  }
}
import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { CoursesDataService} from '../services/courses-data.service';
import { PipeTransform } from '@angular/core';
import { CourseFilterPipe } from 'src/pipes/courseFilter.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { ICatalog } from '../interfaces/courses';
import { Course } from 'src/models/course';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  courses!: Course[];
  errMess: string ="";
  selectedId: any;



  constructor(private _services: CoursesDataService, 
        private _router: Router) {
  
   }

  ngOnInit(): void {
    this._services.getCourses().subscribe({
      next: data => this.courses = data,
      error: err => this.errMess = err
     })
  }
  // getNavigation(link :any, id : any){
    getNavigation(data:any){
    // if(id === ''){
        this._router.navigate(["/enroll", data._id]);
    // } else {
    //     this._router.navigate(["/enroll" + '/' + id]);
    // }
}
}

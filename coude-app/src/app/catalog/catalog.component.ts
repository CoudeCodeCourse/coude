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

  courses1!: Course[];
  courses2!: Course[];
  errMess: string ="";
  selectedId: any;
  category: any;

  constructor(private _services: CoursesDataService, 
        private _router: Router) {
  
   }

  ngOnInit(): void {
    this._services.getNewCourse().subscribe({
      next: data => this.courses1 = data,
      error: err => this.errMess = err,
     }),
     this._services.getPopularCourse().subscribe({
      next: data => this.courses2 = data,
      error: err => this.errMess = err,
     })
  }
    getNavigation(data:any){
        this._router.navigate(["/enroll", data._id]);
    }
}

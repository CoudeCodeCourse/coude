import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/models/course';
import { CoursesDataService } from '../services/courses-data.service';

@Component({
  selector: 'app-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrls: ['./catalog-detail.component.css']
})
export class CatalogDetailComponent implements OnInit {
  course!: Course[];
  errMess: string ="";
  category: any;

  constructor(private _services: CoursesDataService, 
    private _router: Router) { }

    ngOnInit(): void {
      this._services.getHTMLCourse().subscribe({
        next: data => this.course = data,
        error: err => this.errMess = err })
    }

    getNavigation(data:any){
      this._router.navigate(["/enroll", data._id]);
  }
}

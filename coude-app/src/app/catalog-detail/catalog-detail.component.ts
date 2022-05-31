import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/models/course';
import { CatalogService } from '../catalog.service';
import { CoursesDataService } from '../services/courses-data.service';

@Component({
  selector: 'app-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrls: ['./catalog-detail.component.css']
})
export class CatalogDetailComponent implements OnInit {
  courses!: Course[];
  errMess: string ="";
  selectedId: any;
  category: any;

  constructor(private _services: CoursesDataService, 
    private _router: Router) { }

    ngOnInit(): void {
      this._services.getCourses().subscribe({
        next: data => this.courses = data,
        error: err => this.errMess = err })
    }
}

import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { PipeTransform } from '@angular/core';
import { CourseFilterPipe } from 'src/pipes/courseFilter.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { ICatalog } from '../interfaces/courses';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  // term: string;
  courses: any;
  errMess: string ="";
  selectedTag: any;
  selectedId: any;



  constructor(private _services: CatalogService, private _activeRoute: ActivatedRoute, private _router: Router) {
    this._activeRoute.queryParams.subscribe(params => {
      this.selectedId = params;
      console.log("tiel:", this.selectedId); 
    });
   }

  ngOnInit(): void {

    this._activeRoute.params.subscribe((params) => {
      // console.log(typeof(params['id']))
      this.selectedId = params['id'];
      console.log(this.selectedId);
    })

    this._services.getSampleData().subscribe({
      next: data => this.courses = data,
      error: err => this.errMess = err
     })
  }

  onSelect(courses : ICatalog): void {
    this._router.navigate(['/enroll', courses.title],
    {queryParams: {courses: courses},})
  }

}

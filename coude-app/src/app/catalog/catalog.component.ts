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
  selectedId: any;



  constructor(private _services: CatalogService, private _activeRoute: ActivatedRoute, private _router: Router) {
  
   }

  ngOnInit(): void {
    this.selectedId = this._activeRoute.snapshot.params['id'];
    this._services.getSampleData().subscribe({
      next: data => this.courses = data,
      error: err => this.errMess = err
     })
  }

 
  getNavigation(link :any , id : any){
    if(id === ''){
        this._router.navigate(["/enroll"]);
    } else {
        this._router.navigate(["/enroll" + '/' + id]);
    }
}

}

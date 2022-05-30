import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-enroll-course',
  templateUrl: './enroll-course.component.html',
  styleUrls: ['./enroll-course.component.css']
})
export class EnrollCourseComponent implements OnInit {

  courses: any; // get data course
  errMess: string ="";
  selectedCourses:  any; // get course id from url


  constructor(private _services: CatalogService,
    private router: Router,
    private actRoute: ActivatedRoute) { 
      this.actRoute.params.subscribe((params)=>{
        this.selectedCourses = params['id'];
        console.log(this.selectedCourses);
      })     

    }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(
      (param) => {
        let id = param.get('id');
        if (id != null) {
          this.selectedCourses = id;
        }
      }
    )
    this.getSampleData(this.selectedCourses)
  }

  getSampleData(id: any){
    this._services.getProductsById(id).subscribe(
      {
        next: data => {this.courses = data},
        error: err => this.errMess = err
      })
  }

}

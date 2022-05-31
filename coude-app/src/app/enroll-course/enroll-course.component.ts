import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/models/course';
import { CoursesDataService} from '../services/courses-data.service';

@Component({
  selector: 'app-enroll-course',
  templateUrl: './enroll-course.component.html',
  styleUrls: ['./enroll-course.component.css']
})
export class EnrollCourseComponent implements OnInit {

  course!: Course; // get data course
  errMess: string ="";
  selectedCourses:  any; // get course id from url
  text: any;
  imageSource: any;


  constructor(private _services: CoursesDataService,
    private router: Router,
    private actRoute: ActivatedRoute) { 
      this.actRoute.params.subscribe((params)=>{
        this.selectedCourses = params['id'];
        console.log(this.selectedCourses);
      })     

    }

  ngOnInit(): void {
    // this.actRoute.paramMap.subscribe(
    //   (param) => {
    //     let id = param.get('id');
    //     if (id != null) {
    //       this.selectedCourses = id;
    //     }
    //   }
    // )
    this.getSampleData(this.selectedCourses)
  }

  getSampleData(id: any){
    this._services.GetCourseById(id).subscribe(res =>{
      this.course = res
    })
      console.log(this.course);
  }
  goToPay(){
    this.router.navigate(["/billing"]);
  }
  showAtc(){
    this.text = this.course.atc;
    return this.text;
  }
  showHiw()
  {
    this.text = this.course.hiw;
    return this.text;
  }
  showLn(){
    this.text = this.course.languages;
    return this.text;
  }
  showTF(){
    this.text = this.course.fee;
    return this.text;
  }
  showInstructor(){
    this.text = this.course.instruc_descript;
    return this.text;
  }
  showDegree(){
   
  }

}

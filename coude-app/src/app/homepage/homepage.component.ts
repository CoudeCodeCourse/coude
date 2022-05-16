import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Course } from 'src/models/course';
import { CoursesDataService } from '../services/courses-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [Title]
})
export class HomepageComponent implements OnInit {
  login: boolean = true;
  login_dates: boolean[] = [false, false, false, false, false, false, false, false]
  courses!: Course[];
  errorMsg="";

  constructor(private _title: Title, 
              private _courseService: CoursesDataService) {
    this._title.setTitle("Homepage")
   }

  ngOnInit(): void {
    this.checkin();
    this.GetCourses();
  }
  checkin(){
    let today = new Date().getDay(),
      dateId = "login";
      console.log(today);
    // alert("Bạn đã đăng nhập hôm nay!");
    switch (today) {
        case 0:
            dateId += "Sun";
            this.login_dates[0]=true; break;
        case 1:
            dateId += "Mon"; 
            this.login_dates[1]=true; break;
        case 2:
            dateId += "Tue"; 
            this.login_dates[2]=true; break;
        case 3:
            dateId += "Wed"; 
            this.login_dates[3]=true; break;
        case 4:
            dateId += "Thu"; 
            this.login_dates[4]=true; break;
        case 5:
            dateId += "Fri"; 
            this.login_dates[5]=true; break;
        case 6:
            dateId += "Sat";
            this.login_dates[6]=true;  break;
    }
    // document.getElementById(login).style.background = "var(--green);
  }

  GetCourses(){
    this._courseService.getCourses().subscribe({
      next: data => this.courses = data,
      error: error => this.errorMsg = error
    })
  }
}

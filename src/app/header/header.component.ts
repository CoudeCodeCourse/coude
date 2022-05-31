import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/models/course';
import { User } from 'src/models/user';
import { CoursesDataService } from '../services/courses-data.service';
// import { SearchFilterPipe } from '../pipe/searchFilter.pipe';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  })
export class HeaderComponent implements OnInit {
  // guest = false;
  userLogin?: User;
  
  login = true;
  admin = false;
  isAdmin = true;
  searchText = "";
  // courses = [{
  //   "name": "Back-end Engineer",
  //   "image": "https://winerp.vn/wp-content/uploads/2022/01/nt.jpg"
  // },
  //   {
  //     "name": "Learn HTML",
  //   "image": "https://tmarketing.vn/wp-content/uploads/2021/09/html.jpg"
  // },
  // {
  //   "name": "Learn Javascript",
  // "image": "https://tmarketing.vn/wp-content/uploads/2021/09/html.jpg"
  // },
  // {
  //   "name": "Learn Angular",
  //   "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
  // },
  // {
  //   "name": "Master C#, C+ bla bla bla bla bla bla bla blaaaa",
  //   "image": "https://fasttrack.edu.vn/wp-content/uploads/2021/06/C-Sharp-1920x960.jpeg"
  // },
  // ]
  courses!: Course[];
  errMessage = "";
  selectedId: any;
  selectedCourse: any;
  constructor(private _service: CoursesDataService,
            private _router: Router){
  }
  
  ngOnInit(): void {
    // console.log(this.login);
    // console.log(this.searchText)
    this.getCourses();
  }
  getCourses(){
    this._service.getAvailableCourses().subscribe({
      next: data => this.courses = data,
      error: err => this.errMessage = err
    })
  }
  navigateToACourse(data: any){
    this._router.navigate(['/enroll', data._id])
  }
}

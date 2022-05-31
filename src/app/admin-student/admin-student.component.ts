import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesDataService } from '../services/courses-data.service';
import { Course } from 'src/models/course';

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css']
})
export class AdminStudentComponent implements OnInit {
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

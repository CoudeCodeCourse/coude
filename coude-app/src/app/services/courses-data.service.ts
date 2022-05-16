import { Injectable } from '@angular/core';
import { Course } from 'src/models/course';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { catchError, map, Observable, of, retry, throwError } from 'rxjs';

const url_server = "http://localhost:3000";
@Injectable({
  providedIn: 'root'
})
export class CoursesDataService {
  url = "../../assets/data/courses/courseVer1.json";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this._http.get<Course[]>(`${url_server}/courses`).pipe(
      // map(response => response._embedded.courses),
      retry(3),
      catchError(this.handleError)
    )
    
  }
  handleError(error: HttpErrorResponse){
    return throwError(() => {new Error(error.message)});
  }

  GetCourseById(id:any): Observable<Course> {
    // let API_URL = `${this.REST_API}/read-book/${id}`;
    return this._http.get<Course>(`${url_server}/courses/${id}`, { headers: this.httpHeaders })
      .pipe(
        map((res: Course) => {
          return res
        }),
        catchError(this.handleError)
      )
    // return this._http.get<Course>(`${url_server}/courses/${id}`).pipe(
    //   retry(3),
    //   catchError(this.handleError)
    // )
  }
  // getACourse(id: any): Observable<Course> {
  //   let courses: any;
  //   let  errMessage = "";

  //   this.getCourses().subscribe({
  //     next: data => courses = data,
  //     error: err => errMessage = err
  //   })
  //   console.log("get courses:", courses)
  //   const course = courses.find((c: Course) => c._id === id)!;
    
  //   return of(course);
  // }
}
export interface GetCourseResponse {
  _embedded:{
    courses: Course[];
  }
}
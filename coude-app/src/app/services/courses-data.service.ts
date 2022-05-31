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

  getNewCourse(): Observable<Course[]>{
    return this._http.get<Course[]>(`${url_server}/courses/find-new-courses`).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  getPopularCourse(): Observable<Course[]>{
    return this._http.get<Course[]>(`${url_server}/courses/find-popular-courses`).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  GetCourseById(id:any): Observable<Course> {
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
  updateCourse(id: any, data:any){
    return this._http.patch(`${url_server}/courses/course/${id}`, data);
  }
  hideCourse(id: any, data:any){
    return this._http.patch(`${url_server}/courses/course/hide/${id}`, data);
  }
  showCourse(id: any, data:any){
    return this._http.patch(`${url_server}/courses/course/show/${id}`, data);
  }
  //get course by category
  getCatalogType(category:any): Observable<Course> {
    return this._http.get<Course>(`${url_server}/courses/${category}`)
    .pipe(
      map((res: Course) => {
        return res
      }),
      catchError(this.handleError)
    )
    }
}


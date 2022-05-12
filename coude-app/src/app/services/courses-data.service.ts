import { Injectable } from '@angular/core';
import { Course } from 'src/models/course';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, Observable, of, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesDataService {
  url = "../../assets/data/courses/courseVer1.json";
  constructor(private _http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this._http.get<Course[]>(this.url).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  handleError(error: HttpErrorResponse){
    return throwError(() => {new Error(error.message)});
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

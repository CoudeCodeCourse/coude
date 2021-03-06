import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ICatalog } from './interfaces/courses';
import { Course } from 'src/models/course';
@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  url: string = "http://localhost:3000/courses";
  // url: string = "/assets/data/courses/courserver1.json";

  constructor(private _http: HttpClient) { }

  getSampleData(): Observable<ICatalog[]> {
    return this._http.get<ICatalog[]>(this.url).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message))
  }
  getProductsById(id:any): Observable<ICatalog[]> {
    return this._http.get<ICatalog[]>(`${this.url}+ "/enroll"+ ${id}`)
      .pipe(
        retry(2), catchError(this.handleError)
      )
  }
  // getCatalogType(a:string): Observable<ICatalog[]> {
  //   return this._http.get<ICatalog[]>(`${this.url}/catalog/?type=${a}`)
  //     .pipe(
  //       retry(2), catchError(this.handleError)
  //     )
  // }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
// import { User } from './interface/product';
@Injectable({
  providedIn: 'root'
})
export class ExampleService {

//   url: string = "http://localhost:3000/products";

  constructor(private _http: HttpClient) { }
  

  // getProducts(): Observable<User[]> {
  //   return this._http.get<User[]>(this.url).pipe(
  //   retry(3),
  //   catchError(this.handleError));
  // }

  handleError(error: HttpErrorResponse){
    return throwError(() => {new Error(error.message)})
  }
}

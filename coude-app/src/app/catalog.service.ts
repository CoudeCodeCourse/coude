import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ICatalog } from './interfaces/courses';
@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  url: string = "/assets/data/courses/coursever1.json";
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
}

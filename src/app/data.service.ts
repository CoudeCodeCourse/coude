import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ITopic } from './interfaces/forum';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = "/assets/data/forum/forum.json";
  constructor(private _http: HttpClient) { }

  getSampleData(): Observable<ITopic[]> {
    return this._http.get<ITopic[]>(this.url).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message))
  }
}

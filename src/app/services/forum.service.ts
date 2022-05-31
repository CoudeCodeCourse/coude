import { Injectable } from '@angular/core';
import { Topic } from 'src/models/topic';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { ITopic } from '../interfaces/forum';
const url_server = "http://localhost:3000";
@Injectable({
  providedIn: 'root'
})
export class ForumService {
  url: string = "/assets/data/forum/forum.json";
  // readonly url_server = 'http://localhost:3000';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _http: HttpClient) { }

  //get topic
  getAllTopics(): Observable<Topic[]> {
    return this._http.get<Topic[]>(`${url_server}/topics/topics`).pipe(
      retry(3),
      catchError(this.handleError)
    )
    
  }

  //Load data từ server (local 3000)
  uploadData(data: any){
    return this._http.post(`${url_server}/topics/topics`,data).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  GetTopicById(id:any): Observable<Topic> {
    return this._http.get<Topic>(`${url_server}/topics/${id}`, { headers: this.httpHeaders })
      .pipe(
        map((res: Topic) => {
          return res
        }),
        catchError(this.handleError)
      )
  }

  // getAllTopics(){
  //   return this._http.get(`${this.url_server}/topics`).pipe(
  //     retry(3),
  //     catchError(this.handleError)
  //   )
  // }
  
  // getTopicInfo(id:any) {
  //   return this._http.get(`${this.url_server})/topics/${id}`)
  // }


  handleError(err:HttpErrorResponse){
    return throwError(()=>new Error(err.message))
  }




  //Load data cứng từ file json
//   getTopics(): Observable<ITopic[]> {
//     return this._http.get<ITopic[]>(this.url).pipe(
//       retry(2),
//       catchError(this.handleError)
//     )
//   }
//   handleError(err: HttpErrorResponse) {
//     return throwError(() => new Error(err.message))
//   }
}

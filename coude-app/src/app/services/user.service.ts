import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:4200/';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IUser } from '../interfaces/user';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { User } from '../model/user';
const baseUrl ="http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'home', { responseType: 'text' });
  updateUsers(_id: any, user: User) {
    throw new Error('Method not implemented.');
  }


  constructor(private _http: HttpClient) { }

  getUser(): Observable<IUser[]>{
    return this._http.get<IUser[]>(`${baseUrl}/users`).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  postUser(data:User){
    return this._http.post(`${baseUrl}/users/new-user`,data)
  }
  updateUser(id:any,data:any){
    return this._http.patch(`${baseUrl}/${id}`,data);
  }
  deleteUser(id:any){
    return this._http.delete(`${baseUrl}/${id}`)
  }
  handleError(err: HttpErrorResponse){
    return throwError(()=>new Error(err.message))
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Response } from '../Response';
import { User } from '../User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = ''

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Response<User[]>>{
    return this.http.get<Response<User[]>>(this.apiUrl)
  }
}

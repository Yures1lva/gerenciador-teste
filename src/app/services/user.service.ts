import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Response } from '../models/Response';
import { Colaborador } from '../models/Colaboradores';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private apiUrl = `${environment.ApiUrl}/Colaborador`

  constructor(private http: HttpClient) { }

  getColaboradores(): Observable<Response<Colaborador[]>>{
    return this.http.get<Response<Colaborador[]>>(this.apiUrl)

  }
}

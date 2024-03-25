import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Response } from '../../models/Response';
import { Colaborador } from '../../models/Colaboradores';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private apiUrl = `/Colaborador`

  constructor(private http: HttpClient) { }

  getColaboradores(): Observable<Response<Colaborador[]>>{
    return this.http.get<Response<Colaborador[]>>(this.apiUrl)
  }

  creatColaborador( colaborador: Colaborador): Observable<Response<Colaborador[]>>{
    return this.http.post<Response<Colaborador[]>>(this.apiUrl, colaborador)
  }

  getColaborador(id: number): Observable<Response<Colaborador>>{
    return this.http.get<Response<Colaborador>>(`${this.apiUrl}/${id}`)
  }

  updateColaboradores(colaborador: Colaborador): Observable<Response<Colaborador[]>>{
    return this.http.put<Response<Colaborador[]>>(this.apiUrl, colaborador)
  }
}

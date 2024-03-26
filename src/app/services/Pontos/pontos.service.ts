import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Response } from '../../models/Response';
import { Pontos } from '../../models/Pontos';

@Injectable({
  providedIn: 'root'
})
export class PontosService {

  private apiUrl = `/Ponto`


  constructor(private http: HttpClient) { }

  getPontos(): Observable<Response<Pontos[]>>{
    return this.http.get<Response<Pontos[]>>(this.apiUrl)
  }

  creatPontos( ponto: Pontos): Observable<Response<Pontos[]>>{
    return this.http.post<Response<Pontos[]>>(this.apiUrl, ponto)
  }
}

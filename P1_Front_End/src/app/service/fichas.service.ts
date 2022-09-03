import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ficha } from '../model/ficha-clinica';
import { ListaDatos } from '../model/datos';
@Injectable({
  providedIn: 'root',
})
export class FichasService {
  private api: string =
    'https://equipoyosh.com/stock-nutrinatalia/fichaClinica';
  constructor(private http: HttpClient) {}
  getFichas(): Observable<ListaDatos<Ficha>> {
    return this.http.get<ListaDatos<Ficha>>(this.api);
  }
}

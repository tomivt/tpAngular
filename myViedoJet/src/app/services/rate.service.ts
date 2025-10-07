import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rate } from '../models/Rate';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  private api: string = "https://68dd25eb7cd1948060ac9cad.mockapi.io/rates"

  constructor(private http: HttpClient) { }

  getRates(): Observable<Rate[]> {
    return this.http.get<Rate[]>(this.api)
  }

  getRatesById(id: number) {
    return this.http.get<Rate[]>(`${this.api}/${id}`)
  }
}

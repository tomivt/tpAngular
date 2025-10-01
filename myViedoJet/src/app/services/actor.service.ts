import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from '../models/Actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private api: string = "https://68dd25eb7cd1948060ac9cad.mockapi.io/actors"

  constructor(private http: HttpClient) { }

  getCategory(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.api)
  }
  
}

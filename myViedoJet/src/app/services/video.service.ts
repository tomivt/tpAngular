import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Movie} from '../models/Movie';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private api: string = "https://68dd25eb7cd1948060ac9cad.mockapi.io/movies"

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.api)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private api: string = "https://68dd25eb7cd1948060ac9cad.mockapi.io/categories"

  constructor(private http: HttpClient) { }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.api)
  }
}

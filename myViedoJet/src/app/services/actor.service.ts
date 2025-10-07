import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from '../models/Actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private api: string = "https://68dd25eb7cd1948060ac9cad.mockapi.io/actors"

  public actors: Actor[] = []

  constructor(private http: HttpClient) {
    this.getActors().subscribe(actors => {
      this.actors = actors;
      console.log(actors);
      console.log("id" + this.getActorById('1'));
    })
  }

  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.api)
  }

  getActorById(id: String) {
    return this.http.get<Actor>(`${this.api}/${id}`)
  }
}

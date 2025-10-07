import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../../models/Movie';
import {VideoService} from '../../services/video.service';
import {Actor} from '../../models/Actor';
import {ActorService} from '../../services/actor.service';
import {MovieMenuComponent} from '../movie-menu/movie-menu.component';

@Component({
  selector: 'app-movie-detail',
  imports: [
    MovieMenuComponent
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
      id!: number;
      movie?: Movie;
      actor!: Actor;
      actors!: Actor[] | undefined;
      constructor(
        protected route: ActivatedRoute,
        protected movieService: VideoService,
        protected actorService: ActorService
      ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.movie = this.movieService.movies.find((m: Movie) => m.id === this.id);
    console.log(this.movie?.name);
    this.actorService.getActorById('1').subscribe((actor: Actor) => {
      this.actor = actor;
      console.log(this.actor);
    })
  }

  setActor(actor: Actor) {}

}

import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../../models/Movie';
import {VideoService} from '../../services/video.service';
import {Actor} from '../../models/Actor';
import {ActorService} from '../../services/actor.service';
import {MovieMenuComponent} from '../movie-menu/movie-menu.component';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {RateService} from '../../services/rate.service';
import {Rate} from '../../models/Rate';

@Component({
  selector: 'app-movie-detail',
  imports: [
    MovieMenuComponent,
    AsyncPipe
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {

  idUser = 1;

  id!: number;
  movie?: Movie;
  actor!: Actor;
  rates!: Rate[];
  rate!: Rate;

  constructor(
        protected route: ActivatedRoute,
        protected movieService: VideoService,
        protected actorService: ActorService,
        protected rateService: RateService,
      ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.movie = this.movieService.movies.find((m: Movie) => m.id === this.id);
    this.rateService.getRates().subscribe(rates => {
      this.rates = rates
      this.setRate();
    })
  }

  setRate() {
    this.rates.forEach(rate => {
      console.log('E' + rate);
      if (rate.idUser === this.idUser) {
        this.rate = rate;

      }
    })
  }
}

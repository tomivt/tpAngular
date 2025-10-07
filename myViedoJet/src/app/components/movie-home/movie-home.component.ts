import { Component } from '@angular/core';
import {VideoService} from '../../services/video.service';
import {Movie} from '../../models/Movie';
import {RouterLink} from '@angular/router';
import { MovieMenuComponent } from '../movie-menu/movie-menu.component';
import { CommonModule } from '@angular/common';

type MovieWithSeen = Movie & { seen: boolean };

@Component({
  selector: 'app-movie-home',
  imports: [
    RouterLink, MovieMenuComponent, CommonModule,
  ],
  templateUrl: './movie-home.component.html',
  styleUrl: './movie-home.component.css'
})



export class MovieHomeComponent {
  protected movies: MovieWithSeen[] = []
  constructor(private service: VideoService) { }

  ngOnInit() {
    this.service.getMovies().subscribe(data => {
    this.movies = data.map(movie => ({ ...movie, seen: false }));
    console.log(data)
  });

  }

  toggleSeen(movie: MovieWithSeen) {
    movie.seen = !movie.seen;
    console.log(movie.name, 'vu =', movie.seen);
  }



}

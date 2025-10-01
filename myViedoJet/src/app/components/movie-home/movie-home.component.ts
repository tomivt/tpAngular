import { Component } from '@angular/core';
import {VideoService} from '../../services/video.service';
import {Movie} from '../../models/Movie';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-movie-home',
  imports: [
    RouterLink
  ],
  templateUrl: './movie-home.component.html',
  styleUrl: './movie-home.component.css'
})
export class MovieHomeComponent {
  protected movies: Movie[] = []
  constructor(private service: VideoService) { }

  ngOnInit() {
    this.service.getMovies().subscribe(data => {
        this.movies = data
        console.log(data)
      });
  }
}

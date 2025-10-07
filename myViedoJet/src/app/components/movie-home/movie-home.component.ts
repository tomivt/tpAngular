import { Component } from '@angular/core';
import {VideoService} from '../../services/video.service';
import {Movie} from '../../models/Movie';
import {RouterLink} from '@angular/router';
import { MovieMenuComponent } from '../movie-menu/movie-menu.component';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/Category';

type MovieWithSeen = Movie & { seen: boolean };

@Component({
  selector: 'app-movie-home',
  imports: [
    RouterLink, MovieMenuComponent, CommonModule
  ],
  templateUrl: './movie-home.component.html',
  styleUrl: './movie-home.component.css'
})



export class MovieHomeComponent {
  protected movies: MovieWithSeen[] = []
  protected filteredMovies: MovieWithSeen[] = [];
  protected filterName: string = '';
  protected filterCategory: Category | null = null;
  protected filterSeen: boolean | null = null; 
  protected categories: Category[] = [];


  constructor(private service: VideoService, private Categoryservice: CategoryService) {
    this.Categoryservice.getCategory().subscribe( data => {
      this.categories = data
    })

    
   }

  ngOnInit() {

    this.service.getMovies().subscribe(data => {
    this.movies = data.map(movie => ({ ...movie, seen: false }));
    console.log(data)
    this.filteredMovies = [...this.movies];
    this.applyFilters();
  });

  
      
  }

  applyFilters() {
  this.filteredMovies = this.movies.filter(movie => {
    const matchesName = movie.name.toLowerCase().includes(this.filterName.toLowerCase());
    const matchesCategory = this.filterCategory ? movie.category.id === this.filterCategory.id : true;
    const matchesSeen = this.filterSeen === null ? true : movie.seen === this.filterSeen;
    return matchesName && matchesCategory && matchesSeen;
  });
}


  toggleSeen(movie: MovieWithSeen) {
    movie.seen = !movie.seen;
    this.applyFilters();
    console.log(movie.name, 'vu =', movie.seen);
  }

  

}
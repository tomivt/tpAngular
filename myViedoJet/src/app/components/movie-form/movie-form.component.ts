import { Component, output } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Movie } from '../../models/Movie';
import { Category } from '../../models/Category';
import { CategoryService } from '../../services/category.service';
import { VideoService } from '../../services/video.service';
import {MovieMenuComponent} from '../movie-menu/movie-menu.component';

@Component({
  selector: 'app-movie-form',
  imports: [ReactiveFormsModule, MovieMenuComponent],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css'
})
export class MovieFormComponent {

  //addMovieEvent = output<Movie>()

  categories: Category[]= [];


  movieForm: FormGroup = new FormGroup({
    nameForm: new FormControl('', Validators.required),
    categoryForm: new FormControl('', Validators.required),
    actorsForm: new FormArray([])
  })

  constructor(private service: CategoryService, private movieService: VideoService){
    this.service.getCategory().subscribe( data => {
      this.categories = data
    })
  }

  get actorsForm(): FormArray {
    return this.movieForm.get('actorsForm') as FormArray;
  }

  ajouterActeur(): void {
    this.actorsForm.push(new FormControl(''));
  }

  supprimerActeur(index: number): void {
    this.actorsForm.removeAt(index);
  }

  onSubmit(){
    const movie: Movie = {
      id: 0,
      name: this.movieForm.value.nameForm,
      category: this.movieForm.value.categoryForm,
      actors: this.actorsForm.value.filter((a: string) => a.trim() !== '')
    }

    console.log(movie)

    this.movieService.postMovie(movie).subscribe()

    //this.addMovieEvent.emit(movie)

    this.movieForm.reset()
  }
}

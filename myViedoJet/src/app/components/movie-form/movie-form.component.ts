import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movie-form',
  imports: [ReactiveFormsModule],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css'
})
export class MovieFormComponent {

  addMovieEvent = output<Movie>()

  movieForm: FormGroup = new FormGroup({
    nameForm: new FormControl('', Validators.required),
    categoryForm: new FormControl('', Validators.required),
    actorsForm: new FormControl('')
  })

  onSubmit(){
    const movie: Movie = {
      id: 0,
      name: this.movieForm.value.nameForm,
      category: this.movieForm.value.categoryForm,
      actors: this.movieForm.value.actorsForm
    }

    console.log(movie)

    this.addMovieEvent.emit(movie)

    this.movieForm.reset()
  }
}

import { Routes } from '@angular/router';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieHomeComponent } from './components/movie-home/movie-home.component';

export const routes: Routes = [
    {
        path: 'movie/form', component: MovieFormComponent
    },
    {
        path: 'movie/home', component: MovieHomeComponent
    }
];

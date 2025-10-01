import { Routes } from '@angular/router';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieHomeComponent } from './components/movie-home/movie-home.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: 'movie/form', component: MovieFormComponent
    },
    {
        path: 'movie/home', component: MovieHomeComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: '**', redirectTo: 'login', pathMatch: 'full'
    }
];

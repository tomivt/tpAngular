import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MovieMenuComponent} from './components/movie-menu/movie-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MovieMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myViedoJet';
}

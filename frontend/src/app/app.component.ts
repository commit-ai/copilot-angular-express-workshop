import { Component } from '@angular/core';
import { SuperheroesListComponent } from './superheroes-list/superheroes-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SuperheroesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}

import { Component, OnInit, inject } from '@angular/core';
import { SuperheroesService, Superhero } from '../superheroes.service';

@Component({
  selector: 'app-superheroes-list',
  standalone: true,
  templateUrl: './superheroes-list.component.html',
  styleUrl: './superheroes-list.component.css'
})
export class SuperheroesListComponent implements OnInit {
  private readonly superheroesService = inject(SuperheroesService);

  superheroes: Superhero[] = [];
  loading = true;
  error = '';

  ngOnInit(): void {
    this.superheroesService.getAll().subscribe({
      next: (heroes) => {
        this.superheroes = heroes;
        this.loading = false;
      },
      error: () => {
        this.error = 'Could not load the superhero roster. Check that the backend is running.';
        this.loading = false;
      }
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface Superhero {
  id: number;
  name: string;
  image: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
}

@Injectable({ providedIn: 'root' })
export class SuperheroesService {
  private readonly http = inject(HttpClient);

  getAll(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>('/api/superheroes');
  }
}

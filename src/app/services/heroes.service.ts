import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroeDTO } from '../dto/heroeDTO';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<HeroeDTO[]> {
    return this.http.get<HeroeDTO[]>(`${this.baseUrl}/heroes`);
  }
}

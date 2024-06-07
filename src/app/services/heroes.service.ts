import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroDTO } from '../dto/heroDTO';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<HeroDTO[]> {
    return this.http.get<HeroDTO[]>(`${this.baseUrl}/heroes`);
  }
}

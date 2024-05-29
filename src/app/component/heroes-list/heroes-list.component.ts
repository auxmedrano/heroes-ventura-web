import { Component, OnInit } from '@angular/core';
import { HeroeDTO } from '../../dto/heroeDTO';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.scss',
})
export class HeroesListComponent implements OnInit {
  heroes: HeroeDTO[] = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes));
  }
}

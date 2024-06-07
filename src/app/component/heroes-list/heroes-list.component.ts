import { Component, OnInit } from '@angular/core';
import { HeroDTO } from '../../dto/heroDTO';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.scss',
})
export class HeroesListComponent implements OnInit {
  public heroes: HeroDTO[] = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes));
  }
}

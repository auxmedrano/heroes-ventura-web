import {Component, Input, OnInit} from '@angular/core';
import {HeroDTO} from "../../dto/heroDTO";

@Component({
  selector: 'hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {
  // @Input() hero: HeroDTO = {} as HeroDTO;
  @Input() hero!: HeroDTO;
  @Input() myNumber: number = 0;
  @Input() showHeader: boolean = true;


  publishers = ['Marvel Comics', 'DC Comics'];
  publisher = '';


  constructor() { }

  ngOnInit(): void {
    this.publisher = this.getPublisher(this.hero.publisherId);
  }

  getPublisher(id: number): string {
    return this.publishers[id - 1];
  }

}

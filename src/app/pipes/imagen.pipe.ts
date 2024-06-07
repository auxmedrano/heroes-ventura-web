import { Pipe, PipeTransform } from '@angular/core';
import {HeroDTO} from "../dto/heroDTO";

@Pipe({
  name: 'imagen',
  standalone: true,
  // pure: true
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: HeroDTO): string {
    if (!heroe.id && !heroe.altImg) {
      return 'assets/no-image.png';
    } else if (heroe.altImg) {
      // return heroe.altImg;
      //return "https://images.unsplash.com/photo-1682905926517-6be3768e29f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      return `assets/heroes/${heroe.altImg}.jpg`;
    } else {
      return `assets/heroes/${heroe.altImg}.jpg`;
    }
  }

}

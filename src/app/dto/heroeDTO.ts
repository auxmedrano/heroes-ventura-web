export interface HeroeDTO {
  id?: number;
  superhero: string;
  publisherId: number;
  alterEgo: string;
  firstAppearance: string;
  characters: string;
  altImg?: string;
}

export enum Publisher {
  DCComics = 'DC Comics',
  MarvelComics = 'Marvel Comics',
}

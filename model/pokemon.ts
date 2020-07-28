export interface PokemonCard {
  id: number;
  name: string;
  imageURL: string;
  types: string[];
}

export interface Stats {
  [name: string]: number;
}

export interface Pokemon extends PokemonCard {
  stats: Stats;
  height: number;
  weight: number;
}

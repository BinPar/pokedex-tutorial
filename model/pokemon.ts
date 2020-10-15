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
  stats: PokemonStats;
  height: number;
  weight: number;
}

export interface PokemonStats {
  hp: number,
  attack: number,
  defense: number,
  specialAttack: number,
  specialDefense: number,
  speed: number
}

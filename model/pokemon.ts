export interface PokemonReference {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  results: PokemonReference[];
}

export interface PokemonBasicIfo {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
}

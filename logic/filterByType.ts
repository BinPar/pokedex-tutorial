import { PokemonCard } from "../model/pokemon";


type FilterType<T> = (T) => T;

const filterByType = <T extends PokemonCard>(type: string): FilterType<T[]> => {
  return (list: T[]): T[] => {
    return list.filter(
      (pokemon: T): boolean => pokemon.types.includes(type)
    );
  }
}
  
export default filterByType;

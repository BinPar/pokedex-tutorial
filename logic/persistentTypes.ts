let lastTypes: string[];

// recibe un array de strings para definir los types seleccionados
export const setLastTypes= (types: string[]): void => {
  lastTypes=types;
}

// recupera el array con los types
export const getLastTypes= (): string[] => {
  return lastTypes;
}
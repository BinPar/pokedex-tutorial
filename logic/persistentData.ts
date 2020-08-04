let lastTypes: string[];

export const setLastTypes= (types: string[]): void => {
    lastTypes = types;
};
export const getLastTypes= (): string[] => lastTypes;
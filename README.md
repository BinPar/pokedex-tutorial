# Pokedex Tutorial

Pokedex tutorial using:

- typescript
- eslint
- jest
- react
- mongo
- next-js




Creo una nueva lógica llamada pokemon.ts. En ella recojo todas las características de un pokemon desde model/pokemon.ts:
<img src=captures/Logic_pokemon-ts.png>

Dentro del model/pokemon.ts creo un nuevo interface para tipar los stats del pokemon:
<img src=captures/NewInterface_model_pokemon-ts.png>

Después he creado una page llamada [pokemonName].tsx. Dentro llamo a la función para traer los datos, busco en toda la lista de pokemons el que coincide con el link clickado. Y doy formato a esa info para mostrarla en pantalla en una nueva página:
<img src=captures/Page_pokemonName-tsx_1.png>
<img src=captures/Page_pokemonName-tsx_2.png>
<img src=captures/Page_pokemonName-tsx_3.png>

El resultado final es este:
<img src=captures/Resultado.png>

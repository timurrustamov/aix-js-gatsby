import axios from 'axios';

interface Pokemon {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
}

interface PokemonResponse {
  data: Pokemon[];
}

const getPokemons = async () => {
  const { data } = await axios.get<PokemonResponse>(
    'https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:[1 TO 151] (set.id:ex1 OR set.id:ex2 OR set.id:ex2 OR set.id:ex3 OR set.id:ex4 OR set.id:ex5 OR set.id:ex6 OR set.id:ex7 OR set.id:ex8 OR set.id:ex9)',
    {
      headers: { 'X-API-KEY': process.env.POKEMON_API_KEY },
    },
  );

  return data.data.map((pokemon) => {
    const { id, name, images } = pokemon;
    return { id, name, images };
  });
};

export default getPokemons;

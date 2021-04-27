import { CreatePagesArgs } from 'gatsby';
import slugify from 'slugify';
import { resolve } from 'path';

interface PokemonPagesQueryResponse {
  allPokemon: {
    nodes: {
      id: string;
      name: string;
    }[];
  };
}

const createPages = async ({ actions, graphql }: CreatePagesArgs) => {
  const { data } = await graphql<PokemonPagesQueryResponse>(`
    query PokemonPages {
      allPokemon {
        nodes {
          id
          name
        }
      }
    }
  `);

  for (const node of data.allPokemon.nodes) {
    const { id, name } = node;

    actions.createPage({
      path: `/pokemon/${slugify(name.toLocaleLowerCase())}`,
      component: resolve(__dirname, '../src/templates/pokemon-page.tsx'),
      context: { id },
    });
  }
};

export default createPages;

import { NodeInput, SourceNodesArgs } from 'gatsby';

import getPokemons from './get-pokemons';

const sourceNodes = async ({ actions, createNodeId, createContentDigest }: SourceNodesArgs) => {
  const pokemons = await getPokemons();

  for (const pokemon of pokemons) {
    const node: NodeInput = {
      _id: pokemon.id,
      id: createNodeId(pokemon.id),
      name: pokemon.name,
      images: pokemon.images,
      internal: {
        type: 'Pokemon',
        contentDigest: createContentDigest(pokemon),
      },
    };

    actions.createNode(node);
  }
};

export default sourceNodes;

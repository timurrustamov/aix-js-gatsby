import { CreateResolversArgs } from 'gatsby';
import { createRemoteFileNode } from 'gatsby-source-filesystem';

interface PokemonImage {
  large: string;
  small: string;
}

const createResolvers = ({
  cache,
  actions,
  createNodeId,
  createResolvers,
  store,
  reporter,
}: CreateResolversArgs) => {
  const resolvers = {
    PokemonImages: {
      localFile: {
        type: 'File',
        resolve: async (source: PokemonImage) => {
          const { large } = source;

          if (large) {
            return createRemoteFileNode({
              cache,
              reporter,
              store,
              createNode: actions.createNode,
              createNodeId: createNodeId,
              url: large,
            });
          }
        },
      },
    },
  };

  createResolvers(resolvers);
};

export default createResolvers;

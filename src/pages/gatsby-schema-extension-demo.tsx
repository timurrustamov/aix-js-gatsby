import React, { FunctionComponent } from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImageProps } from 'gatsby-plugin-image';

import PokemonCard from '../components/PokemonCard';
import SlideMain from '../components/SlideMain';
import Seo from '../components/Seo';

interface PokemonQueryResponse {
  pokemon: {
    name: string;
    images: {
      large: string;
      localFile: {
        childImageSharp: {
          gatsbyImageData: GatsbyImageProps['image'];
        };
      };
    };
  };
}

const POKEMON_QUERY = graphql`
  query PokemonLazyImage {
    pokemon(name: { eq: "Bulbasaur" }) {
      name
      images {
        large
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

const GatsbySchemaExtensionDemo: FunctionComponent = () => {
  const { pokemon } = useStaticQuery<PokemonQueryResponse>(POKEMON_QUERY);

  const image = pokemon?.images.localFile.childImageSharp.gatsbyImageData;

  return (
    <>
      <Seo
        title="[AixJS] GatsbyJS and Gatsby cloud - How to add custom resolvers for graphql fields"
        description="Let's optimize images to make the user experience even better using gatsby-plugin-image !"
      />

      <SlideMain previous="/gatsby-plugin-image" next="/gatsby-plugins">
        <div className="flex w-full justify-center items-center">
          <PokemonCard className="flex-1 w-full max-w-md" pokemon={pokemon} image={image} />
        </div>
      </SlideMain>
    </>
  );
};

export default GatsbySchemaExtensionDemo;

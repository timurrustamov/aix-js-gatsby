import React, { FunctionComponent } from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import PokemonCard from '../components/PokemonCard';
import SlideMain from '../components/SlideMain';
import Seo from '../components/Seo';

interface PokemonQueryResponse {
  pokemon: {
    name: string;
    images: {
      large: string;
    };
  };
}

const POKEMON_QUERY = graphql`
  query Pokemon {
    pokemon(name: { eq: "Pikachu" }) {
      name
      images {
        large
      }
    }
  }
`;

/**
 * Note to self:
 * Do not forget to show how to add dynamic page generation for all our pokemons !
 */

const GatsbyNodeDemo: FunctionComponent = () => {
  const { pokemon } = useStaticQuery<PokemonQueryResponse>(POKEMON_QUERY);

  return (
    <>
      <Seo
        title="[AixJS] GatsbyJS and Gatsby cloud - How to extend Gatsby graphql schema"
        description="We'll see how to extend Gatsby graphql schema and add a cute pokemon image to our card !"
      />

      <SlideMain previous="/pokemon-intro" next="/gatsby-plugin-image">
        <div className="flex w-full justify-center items-center">
          <PokemonCard className="flex-1 w-full max-w-md" pokemon={pokemon} />
        </div>
      </SlideMain>
    </>
  );
};

export default GatsbyNodeDemo;

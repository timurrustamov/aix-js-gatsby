import React, { FunctionComponent } from 'react';

import { graphql } from 'gatsby';

import PokemonCard from '../components/PokemonCard';
import SlideMain from '../components/SlideMain';
import Seo from '../components/Seo';

interface PokemonPageData {
  pokemon: {
    name: string;
    images: {
      large: string;
    };
  };
}

interface PokemonPageProps {
  data: PokemonPageData;
}

const PokemonPage: FunctionComponent<PokemonPageProps> = (props) => {
  const { data } = props;

  return (
    <>
      <Seo
        title="[AixJS] GatsbyJS and Gatsby cloud - How to create custom pages"
        description={`Every generated page will be for a different pokemon ! This on is for ${data?.pokemon.name} !`}
      />

      <SlideMain previous="/how-gatsby-works" next="/gatsby-plugin-image">
        <div className="flex w-full justify-center items-center">
          <PokemonCard className="flex-1 w-full max-w-md" pokemon={data?.pokemon} />
        </div>
      </SlideMain>
    </>
  );
};

export default PokemonPage;

export const query = graphql`
  query PokemonPageQuery($id: String!) {
    pokemon(id: { eq: $id }) {
      name
      images {
        large
      }
    }
  }
`;

import React, { FunctionComponent } from 'react';

import PokemonCard from '../components/PokemonCard';
import Seo from '../components/Seo';
import SlideMain from '../components/SlideMain';

const PokemonIntro: FunctionComponent = () => {
  return (
    <>
      <Seo
        title="[AixJS] GatsbyJS and Gatsby cloud - Time for some demo !"
        description="We will prepare the ground for some (hopefully) impactful demo about why Gatsby is so cool 😎"
      />

      <SlideMain previous="/how-gatsby-works" next="/gatsby-node-demo">
        <div className="flex w-full justify-center items-center">
          <PokemonCard className="flex-1 w-full max-w-md" />
        </div>
      </SlideMain>
    </>
  );
};

export default PokemonIntro;

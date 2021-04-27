import React, { FunctionComponent } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import SlideMain from '../components/SlideMain';
import Seo from '../components/Seo';

const HowGatsbyWorks: FunctionComponent = () => {
  return (
    <>
      <Seo
        title="[AixJS] GatsbyJS and Gatsby cloud - How exactly does Gatsby work ?"
        description="In this slide we will describe how and where Gatsby gets data."
      />

      <SlideMain previous="/ssg" next="/pokemon-intro">
        <h1 className="text-6xl text-center font-bold my-12">
          How <span className="text-purple-800">Gatsby</span> works ? 🧙
        </h1>

        <StaticImage
          className="w-md mx-auto"
          alt="How Gatsby Works"
          src="../images/how-gatsby-works.png"
          placeholder="blurred"
          layout="constrained"
          quality={100}
        />
      </SlideMain>
    </>
  );
};

export default HowGatsbyWorks;

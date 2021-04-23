import React, { FunctionComponent } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import SlideMain from '../components/SlideMain';

const HowGatsbyWorks: FunctionComponent = () => {
  return (
    <SlideMain previous="/ssg">
      <h1 className="text-6xl font-bold my-12">
        How <span className="text-purple-800">Gatsby</span> works ? 🧙
      </h1>

      <StaticImage
        className="w-md mx-auto"
        alt="How Gatsby Works"
        src="../images/how-gatsby-works.png"
        placeholder="blurred"
        layout="constrained"
      />
    </SlideMain>
  );
};

export default HowGatsbyWorks;

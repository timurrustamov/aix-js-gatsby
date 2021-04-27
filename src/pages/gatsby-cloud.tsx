import React, { FunctionComponent } from 'react';

import SlideMain from '../components/SlideMain';
import Seo from '../components/Seo';
import GradientText from '../components/GradientText';

const GatsbyCloud: FunctionComponent = () => {
  return (
    <>
      <Seo
        title="[AixJS] GatsbyJS and Gatsby cloud - Let's talk about Gatsby Cloud"
        description="With Gatsby cloud, tailored for Gatsby, you can take advantage of powerful runners and blazing fast builds !"
      />

      <SlideMain previous="/blog-post" next="/gatsby-cloud-features">
        <GradientText className="filter drop-shadow-lg">
          <h1 className="text-6xl text-center">
            <span className="text-gray-800">Let's have a little word about</span>
            <br />
            <span className="font-semibold text-7xl">Gatsby Cloud 🔥</span>
          </h1>
        </GradientText>
      </SlideMain>
    </>
  );
};

export default GatsbyCloud;

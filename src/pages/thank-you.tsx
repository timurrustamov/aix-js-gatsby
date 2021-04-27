import React, { FunctionComponent } from 'react';

import SlideMain from '../components/SlideMain';
import Seo from '../components/Seo';

const ThankYou: FunctionComponent = () => {
  return (
    <>
      <Seo
        title="[AixJS] GatsbyJS and Gatsby cloud - Thank you all !"
        description="Thank you so much for your attention, and please ask questions if something is not really clear ;)"
      />

      <SlideMain previous="/gatsby-cloud-features">
        <h1 className="text-6xl text-center text-purple-800 font-semibold">Thank you so much ! ❤️</h1>
      </SlideMain>
    </>
  );
};

export default ThankYou;

import React, { FunctionComponent } from 'react';

import SlideMain from '../components/SlideMain';
import Seo from '../components/Seo';

const GatsbyCloud: FunctionComponent = () => {
  return (
    <>
      <Seo
        title="[AixJS] GatsbyJS and Gatsby cloud - Let's talk about Gatsby Cloud"
        description="With Gatsby cloud, tailored for Gatsby, you can take advantage of powerful runners and blazing fast builds !"
      />

      <SlideMain previous="/blog-post" next="/thank-you">
        <h1 className="text-6xl text-center">
          Let's have a little word about{' '}
          <span className="text-purple-800 font-semibold">Gatsby Cloud 🔥</span>
        </h1>
      </SlideMain>
    </>
  );
};

export default GatsbyCloud;

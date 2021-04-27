import React, { FunctionComponent } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';

import SlideMain from '../components/SlideMain';
import Seo from '../components/Seo';
import GradientText from '../components/GradientText';

const Index: FunctionComponent = () => {
  return (
    <>
      <Seo
        title="[AixJS] GatsbyJS and Gatsby cloud - the fastest frontend for the modern web"
        description="This is the first slide of AixJS presentation by Timur Rustamov"
      />

      <SlideMain next="/presentation">
        <div className="w-full flex-1 flex flex-col justify-center items-center p-2">
          <h1 className="font-semibold text-5xl lg:text-7xl text-center text-gray-800 filter drop-shadow my-8">
            GatsbyJS
          </h1>

          <motion.div
            drag
            dragConstraints={{ top: -50, right: 50, bottom: 50, left: -50 }}
            dragElastic={0.2}
            transition={{ type: 'spring' }}
          >
            <StaticImage
              draggable={false}
              className="w-48 lg:w-64 filter drop-shadow-2xl my-6"
              alt="Gatsby"
              src="../images/icon.png"
              placeholder="blurred"
              layout="constrained"
            />
          </motion.div>

          <GradientText className="my-8 filter drop-shadow-lg">
            <h2 className="text-5xl lg:text-7xl font-semibold text-center">
              The fastest frontend <span className="text-black">✨</span>
              <br />
              for the modern web
            </h2>
          </GradientText>
        </div>
      </SlideMain>
    </>
  );
};

export default Index;

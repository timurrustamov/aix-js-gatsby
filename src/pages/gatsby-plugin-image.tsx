import React, { FunctionComponent, useRef } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import SlideMain from '../components/SlideMain';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import GradientText from '../components/GradientText';

const GatsbyPluginImage: FunctionComponent = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Seo
        title="[AixJS] GatsbyJS and Gatsby cloud - Presenting gatsby-plugin-image"
        description="The excellent gatsby-plugin-image will help us provide better user experience !"
      />

      <SlideMain previous="/gatsby-node-demo" next="/gatsby-schema-extension-demo">
        <GradientText className="text-center my-12">
          <h1 className="text-6xl font-bold my-2">gatsby-plugin-image</h1>
        </GradientText>

        <div
          ref={ref}
          className="bg-gradient-to-tl from-purple-400 via-pink-500 to-red-500 w-64 md:w-72 h-64 md:h-72 p-12 mx-auto rounded-3xl shadow-2xl"
        >
          <motion.div
            className="relative z-0"
            drag
            dragElastic={0.2}
            dragConstraints={ref}
            transition={{ type: 'spring', bounce: 0.75 }}
            whileTap={{ scale: 1.2 }}
          >
            <StaticImage
              className="z-10"
              draggable={false}
              alt="gatsby-plugin-image"
              src="../images/gatsby-icon-white.png"
              placeholder="blurred"
              layout="constrained"
              style={{ filter: 'drop-shadow(0 25px 25px rgba(0, 0, 0, 0.5))' }}
            />
          </motion.div>
        </div>
      </SlideMain>
    </>
  );
};

export default GatsbyPluginImage;

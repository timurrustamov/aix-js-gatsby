import React, { FunctionComponent, useEffect } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';

import SlideMain from '../components/SlideMain';
import Seo from '../components/Seo';

const emojis = ['🧑‍💻', '🇷🇺', '🍻', '🛹', '🥷'];

const Presentation: FunctionComponent = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      transition: { delay: 3 + i * 0.5 },
    }));
  }, []);

  const renderEmojis = () => {
    return (
      <>
        {emojis.map((emoji, index) => {
          return (
            <motion.span key={emoji} custom={index} animate={controls} initial={{ opacity: 0 }}>
              {emoji}{' '}
            </motion.span>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Seo
        title="[AixJS] GatsbyJS and Gatsby cloud - About the author"
        description="You will know a little bit more about me after this slide ;)"
      />

      <SlideMain previous="/" next="/intro">
        <motion.div
          className="absolute z-10 top-4 left-4 w-24 md:w-36"
          transition={{ delay: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <StaticImage
            className="transform -rotate-12 filter drop-shadow-lg"
            alt="Gojob"
            src="../images/gojob.png"
            placeholder="blurred"
          />
        </motion.div>

        <div className="grid w-full max-w-2xl m-auto">
          <StaticImage
            className="rounded-2xl my-2 md:my-12 filter drop-shadow-2xl"
            alt="Timur Rustamov"
            src="../images/hackertim.png"
            placeholder="blurred"
          />
          <div className="my-2 md:my-4">
            <h1 className="text-gray-800 text-4xl md:text-6xl text-center">
              Hi, my name is <span className="font-semibold text-purple-700">Timur</span> ! 👋
            </h1>
          </div>
          <h2 className="text-4xl md:text-6xl text-center">{renderEmojis()}</h2>
        </div>
      </SlideMain>
    </>
  );
};

export default Presentation;

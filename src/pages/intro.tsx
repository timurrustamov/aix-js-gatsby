import React, { FunctionComponent, useState } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import SlideMain from '../components/SlideMain';
import { motion, Variant } from 'framer-motion';
import tw from 'tailwind-styled-components';

const hidden: Variant = {
  translateX: '0%',
  translateY: '0%',
  rotate: '0deg',
};
const reactShown: Variant = {
  translateX: '75%',
  translateY: '75%',
  rotate: '360deg',
  transition: {
    type: 'spring',
  },
};
const graphqlShown: Variant = {
  translateX: '-75%',
  translateY: '75%',
  rotate: '-360deg',
  transition: {
    type: 'spring',
  },
};
const fireShown: Variant = {
  translateX: '0',
  translateY: '-75%',
  scale: 1.5,
  transition: {
    type: 'spring',
  },
};

const useAnimation = () => {
  const [stage, setStage] = useState(0);
  const toggleStage = () => setStage((stage + 1) % 4);

  switch (stage) {
    case 0:
      return { toggleStage, react: hidden, graphql: hidden, fire: hidden };
    case 1:
      return { toggleStage, react: reactShown, graphql: hidden, fire: hidden };
    case 2:
      return { toggleStage, react: reactShown, graphql: graphqlShown, fire: hidden };
    default:
      return { toggleStage, react: reactShown, graphql: graphqlShown, fire: fireShown };
  }
};

const Intro: FunctionComponent = () => {
  const { toggleStage, react, graphql, fire } = useAnimation();

  return (
    <SlideMain previous="/" next="/ssg">
      <h1 className="text-6xl font-semibold text-center my-8">
        A blazing fast ⚡️
        <p className="text-purple-800">Static Site Generator</p>
      </h1>

      <motion.div
        className="cursor-pointer relative h-64 w-64 lg:w-96 lg:h-96 my-8"
        onTapStart={toggleStage}
        transition={{ type: 'spring', bounce: 0.75 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.2 }}
      >
        <motion.div className="absolute inset-6" animate={fire}>
          <StaticImage
            alt="Fire"
            className="w-58 lg:w-88 filter drop-shadow-2xl"
            src="../images/fire.png"
            placeholder="blurred"
            layout="constrained"
          />
        </motion.div>

        <motion.div className="absolute inset-6" animate={graphql}>
          <StaticImage
            alt="Graphql"
            className="w-58 lg:w-88 filter drop-shadow-2xl"
            src="../images/graphql.png"
            placeholder="blurred"
            layout="constrained"
          />
        </motion.div>

        <motion.div className="absolute inset-6" animate={react}>
          <StaticImage
            alt="React"
            className="w-58 lg:w-88 filter drop-shadow-2xl"
            src="../images/react.svg"
            placeholder="blurred"
            layout="constrained"
          />
        </motion.div>

        <StaticImage
          alt="Gatsby"
          className="absolute w-62 lg:w-96 filter drop-shadow-2xl"
          src="../images/icon.png"
          placeholder="blurred"
          layout="constrained"
        />
      </motion.div>
    </SlideMain>
  );
};

export default Intro;

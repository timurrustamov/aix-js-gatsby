import React, { FunctionComponent } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import tw from 'tailwind-styled-components';

import SlideMain from '../components/SlideMain';
import { motion } from 'framer-motion';

const Container = tw.div`
  w-full
  flex-1
  flex flex-col justify-center items-center
  p-2
`;

const Title = tw.h1`
  font-semibold
  text-6xl lg:text-8xl text-center
  filter drop-shadow
  my-8
`;

const Highlight = tw.span`
  text-purple-800 text-opacity-80
`;

const Index: FunctionComponent = () => {
  return (
    <SlideMain next="/intro">
      <Container>
        <Title>
          <Highlight>Gatsby</Highlight>JS
        </Title>

        <motion.div
          drag
          dragConstraints={{ top: -50, right: 50, bottom: 50, left: -50 }}
          dragElastic={0.2}
          transition={{ type: 'spring' }}
        >
          <StaticImage
            className="w-48 lg:w-96 filter drop-shadow-2xl my-6"
            alt="Gatsby"
            src="../images/icon.png"
            placeholder="blurred"
            layout="constrained"
          />
        </motion.div>

        <div className="my-8">
          <Title>
            The fastest frontend ✨
            <br />
            <Highlight>for the modern web</Highlight>
          </Title>
        </div>
      </Container>
    </SlideMain>
  );
};

export default Index;

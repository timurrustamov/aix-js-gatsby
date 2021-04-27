import React, { FunctionComponent, useEffect } from 'react';

import confetti from 'canvas-confetti';
import { motion, useAnimation } from 'framer-motion';

import SlideMain from '../components/SlideMain';
import Seo from '../components/Seo';

const pluginNames = [
  'gatsby-plugin-image',
  'gatsby-plugin-mdx',
  'gatsby-plugin-sitemap',
  'gatsby-plugin-contentful',
  '...',
];

const createConfetti = () =>
  confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    ticks: 100,
    origin: {
      x: Math.random(),
      y: Math.random() - 0.2,
    },
  });

const GatsbyPlugins: FunctionComponent = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      transition: { delay: 1 + i * 0.5 },
    }));
    return controls.stop;
  }, []);

  useEffect(() => {
    createConfetti()?.then(createConfetti)?.then(createConfetti)?.then(createConfetti);
  }, []);

  const renderPluginNames = () => {
    return (
      <>
        {pluginNames.map((pluginName, index) => {
          return (
            <motion.p
              className="text-4xl text-center font-bold my-2"
              key={pluginName}
              custom={index}
              animate={controls}
              initial={{ opacity: 0 }}
            >
              {pluginName.slice(0, 6) === 'gatsby' ? (
                <a className="underline" href={`https://www.gatsbyjs.com/plugins/${pluginName}`}>
                  {pluginName}
                </a>
              ) : (
                pluginName
              )}
            </motion.p>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Seo
        title="[AixJS] GatsbyJS and Gatsby cloud - Gatsby have so many useful plugins"
        description="Both official and developed by community - they offer great extensions to the already great DX !"
      />

      <SlideMain previous="/gatsby-schema-extension-demo" next="/blog-post">
        <h1 className="text-6xl text-center font-bold text-purple-800 my-12">
          <span className="">And many more... 🎶</span>
        </h1>
        {renderPluginNames()}
      </SlideMain>
    </>
  );
};

export default GatsbyPlugins;

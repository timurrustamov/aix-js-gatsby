import React, { FunctionComponent } from 'react';

import { GatsbyImageProps, GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import cx from 'classnames';

interface Pokemon {
  name: string;
  images: {
    large: string;
  };
}

interface PokemonCardProps {
  pokemon?: Pokemon;
  image?: GatsbyImageProps['image'];
  className?: string;
}

const PokemonCard: FunctionComponent<PokemonCardProps> = (props) => {
  const { pokemon, image, className } = props;

  const name = pokemon?.name || 'A pokemon';
  const staticImage = pokemon?.images.large;

  const Backface = () => {
    if (image) {
      return <GatsbyImage className="pointer-events-none" alt={name} image={image} />;
    }
    if (staticImage) {
      return <img className="pointer-events-none" alt={name} src={staticImage} />;
    }
    return (
      <StaticImage
        className="pointer-events-none"
        alt={name}
        src="../images/pokemon-card-missingno.jpeg"
      />
    );
  };

  return (
    <>
      <motion.div
        className={cx('filter drop-shadow-2xl', className)}
        style={{ transformPerspective: 1000 }}
        transition={{ type: 'spring', bounce: 0.8, velocity: 4 }}
        whileTap={{
          rotateX: '5deg',
          rotateY: '-3deg',
          rotateZ: '-1deg',
          scale: 1.15,
          filter: 'drop-shadow(0 35px 35px rgba(0, 0, 0, 0.25))',
        }}
        whileHover={{
          rotateX: '-5deg',
          rotateY: '5deg',
          rotateZ: '5deg',
          scale: 1.1,
          filter: 'drop-shadow(0 35px 35px rgba(0, 0, 0, 0.25))',
        }}
      >
        <motion.div className="my-auto w-full rounded-lg overflow-hidden">
          <Backface />
        </motion.div>
      </motion.div>
    </>
  );
};

export default PokemonCard;

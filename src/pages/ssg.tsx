import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import React, { FunctionComponent, ReactElement, useState } from 'react';

import SlideMain from '../components/SlideMain';
import WikiCard from '../components/WikiCard';
import WikiDialog from '../components/WikiDialog';
import { ClientSideRenderingWiki, ServerSideRenderingWiki, StaticSiteGenerationWiki } from '../data/wiki';

const SSRImage = (
  <StaticImage
    alt="Server Side Rendering"
    src="../images/server-side-rendering.jpg"
    layout="constrained"
    placeholder="blurred"
    className="w-full h-full"
  />
);

const SPAImage = (
  <StaticImage
    alt="Single Page Application"
    src="../images/single-page-application.jpeg"
    layout="constrained"
    placeholder="blurred"
    className="w-full h-full"
  />
);

const GatsbyImage = (
  <StaticImage
    alt="Static Site Generation (Gatsby)"
    src="../images/gatsby.webp"
    layout="constrained"
    placeholder="blurred"
    className="w-full h-full"
  />
);

type CardItem = {
  id: string;
  title: ReactElement;
  image: ReactElement;
  body: ReactElement;
  overlayClassname: string;
  className?: string;
};

const renderItem = (item: CardItem, setSelected: (item: CardItem) => void) => {
  const { id, title, image, className } = item;
  const handleOnClick = () => {
    setSelected(item);
  };

  return <WikiCard id={id} className={className} onClick={handleOnClick} title={title} Image={image} />;
};

const SSG: FunctionComponent = () => {
  const [selectedItem, setSelectedItem] = useState<CardItem | undefined>();

  return (
    <SlideMain previous="/intro" next="/how-gatsby-works">
      <h1 className="text-6xl font-bold my-12">
        What is <span className="text-purple-800">Static site generation</span> ? 🤨
      </h1>

      <motion.div className="absolute bottom-0 left-0" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
        <StaticImage
          alt="SSG c'est quoi Jamy ?"
          src="../images/jamy.png"
          layout="fixed"
          width={256}
          height={256}
        />
      </motion.div>

      <AnimateSharedLayout type="crossfade">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 max-w-screen-md mx-auto">
          {renderItem(
            {
              id: 'ssr',
              image: SSRImage,
              overlayClassname: 'bg-blue-100',
              title: (
                <h2>
                  <span className="font-sans font-bold">Server side rendering</span>
                  <br />
                  <small>
                    A <i className="text-purple-800 opacity-80">RetroNewWave</i> approach 👩‍🎤
                  </small>
                </h2>
              ),
              body: <ServerSideRenderingWiki />,
            },
            setSelectedItem,
          )}
          {renderItem(
            {
              id: 'spa',
              image: SPAImage,
              overlayClassname: 'bg-blue-100',
              title: (
                <h2>
                  <span className="font-sans font-bold">Client side rendering</span>
                  <br />
                  <small>
                    <i className="text-red-700 opacity-80">Proven (and still modern)</i> technique 🧑‍💻
                  </small>
                </h2>
              ),
              body: <ClientSideRenderingWiki />,
            },
            setSelectedItem,
          )}
          {renderItem(
            {
              id: 'ssg',
              image: GatsbyImage,
              overlayClassname: 'bg-blue-100',
              className: 'md:col-span-2 h-120',
              title: (
                <h2>
                  <span className="text-4xl font-sans font-bold">Static site generation</span>
                  <br />
                  <small>
                    The <i className="text-green-700 opacity-80">best of both</i> worlds ? 🤔
                  </small>
                </h2>
              ),
              body: <StaticSiteGenerationWiki />,
            },
            setSelectedItem,
          )}
        </div>

        <AnimatePresence>
          {selectedItem ? (
            <WikiDialog
              id={selectedItem.id}
              onClick={() => setSelectedItem(undefined)}
              title={selectedItem.title}
              body={selectedItem.body}
              Image={selectedItem.image}
              overlayClassName={selectedItem.overlayClassname}
            />
          ) : null}
        </AnimatePresence>
      </AnimateSharedLayout>
    </SlideMain>
  );
};

export default SSG;

import React, { FunctionComponent } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import cx from 'classnames';

import SlideMain from '../components/SlideMain';
import Seo from '../components/Seo';
import GradientText from '../components/GradientText';

interface TextProps {
  title: string;
  subTitle: string;
  className?: string;
}

const Text: FunctionComponent<TextProps> = (props) => {
  const { title, subTitle, className } = props;

  return (
    <div className={cx('grid-flow-row-dense filter drop-shadow-md', className)}>
      <GradientText className="flex flex-col items-center md:items-baseline text-center md:text-left">
        <p className="text-xl font-bold my-4">{title}</p>
        <p className="text-5xl font-medium">{subTitle}</p>
      </GradientText>
    </div>
  );
};

const GatsbyCloudFeatures: FunctionComponent = () => {
  return (
    <>
      <Seo
        title="[AixJS] GatsbyJS and Gatsby cloud - Let's talk about Gatsby Cloud"
        description="With Gatsby cloud, tailored for Gatsby, you can take advantage of powerful runners and blazing fast builds !"
      />

      <SlideMain previous="/gatsby-cloud" next="/thank-you">
        <GradientText>
          <h1 className="text-5xl md:text-7xl text-center font-bold my-8">
            The Only Cloud Made
            <br /> For Gatsby
          </h1>
        </GradientText>

        <p className="text-gray-800 text-lg text-center max-w-lg mx-auto mt-8 mb-16">
          Gatsby Cloud is a unified cloud platform specifically built for the Gatsby framework that combines a
          modern developer toolset and workflow with an optimized, global edge network for an unbeatable
          Gatsby experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 gap-y-16 max-w-screen-xl p-8">
          <Text
            className="md:order-2"
            title="DEPLOY TO THE EDGE"
            subTitle="The fastest way to deliver the fastest frontends"
          />
          <StaticImage className="md:order-1 col-span-2" alt="Gatsby CDN" src="../images/cdn-map.png" />

          <Text
            className="md:order-3"
            title="INCREMENTAL BUILDS IN THE CLOUD"
            subTitle="Dramatically reduce build & deploy times"
          />
          <StaticImage
            className="md:order-4 col-span-2"
            alt="Gatsby Cloud incremental builds"
            layout="fullWidth"
            src="../images/incremental-builds.svg"
            quality={100}
          />

          <Text
            className="md:order-6"
            title="REAL-TIME CMS PREVIEWS"
            subTitle="Simplify content collaboration"
          />
          <StaticImage
            className="md:order-5 col-span-2"
            alt="Gatsby Cloud CMS preview"
            layout="fullWidth"
            src="../images/cms-preview.svg"
            quality={100}
          />

          <Text
            className="md:order-7"
            title="LIGHTHOUSE REPORTS"
            subTitle="Get instant feedback on site performance"
          />
          <StaticImage
            className="md:order-8 col-span-2"
            alt="Gatsby Cloud CMS preview"
            layout="fullWidth"
            src="../images/lighthouse.svg"
            quality={100}
          />
        </div>
      </SlideMain>
    </>
  );
};

export default GatsbyCloudFeatures;

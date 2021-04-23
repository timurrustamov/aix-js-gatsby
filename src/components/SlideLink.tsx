import React, { FunctionComponent } from 'react';

import cx from 'classnames';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

interface SlideLinkProps {
  to: string;
  direction: 'left' | 'right';
  className?: string;
}

const SlideLink: FunctionComponent<SlideLinkProps> = (props) => {
  const { to, direction, className, children } = props;

  return (
    <AniLink
      swipe
      direction={direction}
      to={to}
      className={cx(
        'bg-purple-100 p-3 rounded text-gray-800 text-xl text-center col-span-1',
        className,
      )}
    >
      {children}
    </AniLink>
  );
};

export default SlideLink;

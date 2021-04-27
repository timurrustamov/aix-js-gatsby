import React, { FunctionComponent } from 'react';

import cx from 'classnames';

interface GradientTextProps {
  className?: string;
}

const GradientText: FunctionComponent<GradientTextProps> = (props) => {
  const { className, children } = props;

  return (
    <div
      className={cx(
        'text-transparent bg-gradient-to-b from-purple-900 via-indigo-800 to-blue-300 bg-clip-text',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default GradientText;

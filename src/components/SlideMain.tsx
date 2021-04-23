import React, { FunctionComponent } from 'react';

import cx from 'classnames';
import SlideLink from './SlideLink';

interface SlideMainProps {
  next?: string;
  previous?: string;
  className?: string;
}

const SlideMain: FunctionComponent<SlideMainProps> = (props) => {
  const { next, previous, className, children } = props;

  return (
    <main className={cx('bg-white min-h-full flex flex-col items-center justify-center', className)}>
      <div className="w-full flex-1 flex flex-col justify-center items-center p-4">{children}</div>

      {next || previous ? (
        <div className="w-full p-4 shadow-inner grid gap-6 grid-cols-1 md:grid-cols-5">
          {previous ? (
            <SlideLink className="md:col-start-2" to={previous} direction="right">
              ← Previous
            </SlideLink>
          ) : null}

          {next ? (
            <SlideLink className="md:col-start-4" to={next} direction="left">
              Next →
            </SlideLink>
          ) : null}
        </div>
      ) : null}
    </main>
  );
};

export default SlideMain;

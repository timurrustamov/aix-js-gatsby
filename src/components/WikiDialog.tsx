import React, { ComponentProps, FunctionComponent, ReactChild, useEffect } from 'react';

import { motion } from 'framer-motion';
import cx from 'classnames';

import WikiCard from './WikiCard';

interface WikiDialogProps extends ComponentProps<typeof WikiCard> {
  body: ReactChild;
  overlayClassName?: string;
}

const WikiDialog: FunctionComponent<WikiDialogProps> = (props) => {
  const { Image, id, title, body, onClick, overlayClassName, className } = props;

  useEffect(() => {
    const scrollingElement = document.getElementsByClassName('tl-edges')[0] as HTMLDivElement;
    if (!scrollingElement) {
      return;
    }

    scrollingElement.scrollTo({ top: 0, behavior: 'smooth' });

    const previousOverflow = scrollingElement.style.overflow;
    scrollingElement.style.overflow = 'hidden';
    return () => void (scrollingElement.style.overflow = previousOverflow);
  }, []);
  return (
    <>
      <motion.div
        onClick={onClick}
        className={cx('absolute inset-0 bg-transparent filter blur', overlayClassName)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        onClick={onClick}
        layoutId={`container-${id}`}
        className={cx(
          'cursor-pointer absolute inset-4 md:inset-16 max-w-screen-sm mx-auto rounded shadow-xl bg-gray-50',
          className,
        )}
      >
        <motion.div layoutId={`image-${id}`} className="w-full h-1/3">
          {Image}
        </motion.div>

        <div className="p-4 md:p8 h-2/3 overflow-scroll">
          <motion.div layoutId={`title-${id}`} className="text-4xl">
            {title}
          </motion.div>
          <motion.div layoutId={`body-${id}`} className="opacity-100 py-6 " animate={{ opacity: 1 }}>
            {body}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default WikiDialog;

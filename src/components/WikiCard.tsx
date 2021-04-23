import React, { FunctionComponent, ReactChild, ReactElement } from 'react';

import { motion } from 'framer-motion';
import cx from 'classnames';

interface WikiCardProps {
  Image: ReactElement;
  id: string;
  title?: ReactChild;
  onClick?: () => void;
  className?: string;
}

const WikiCard: FunctionComponent<WikiCardProps> = (props) => {
  const { Image, id, onClick, title, className } = props;

  return (
    <>
      <motion.div
        layoutId={`container-${id}`}
        onClick={onClick}
        className={cx('cursor-pointer rounded overflow-hidden shadow-2xl bg-gray-50', className)}
      >
        <motion.div layoutId={`image-${id}`} className="w-full h-64 lg:h-84">
          {Image}
        </motion.div>

        <div className="p-4">
          <motion.div layoutId={`title-${id}`} className="text-3xl my-4">
            {title}
          </motion.div>
          <motion.div layoutId={`body-${id}`} className="opacity-100" initial={{ opacity: 0 }} />
        </div>
      </motion.div>
    </>
  );
};

export default WikiCard;

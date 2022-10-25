import { motion } from 'framer-motion';
import type { FC } from 'react';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import type { IChildren } from '@/types/common.types';

type FadeUpDownProps = {
  className?: string;
  yOffset?: number;
  xOffset?: number;
  duration?: number;
  delay?: number;
  rotateZ?: number;
  rotateX?: number;
  rotateY?: number;
} & IChildren;

const FadeUpDown: FC<FadeUpDownProps> = ({
  children,
  className,
  yOffset = -10,
  xOffset = 0,
  duration = 0.6,
  delay = 0,
  rotateZ = 0,
  rotateX = 0,
  rotateY = 0,
}) => {
  const [itemRef, itemInView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  return (
    <motion.div
      className={`${className}`}
      animate={{
        y: itemInView ? 0 : yOffset,
        x: itemInView ? 0 : xOffset,
        opacity: itemInView ? 1 : 0,
        rotateZ: itemInView ? 0 : rotateZ,
        rotateX: itemInView ? 0 : rotateX,
        rotateY: itemInView ? 0 : rotateY,
      }}
      transition={{ type: 'tween', duration, delay }}
      ref={itemRef}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpDown;

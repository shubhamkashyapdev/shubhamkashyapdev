'use client';

import { useTheme } from 'next-themes';
import React from 'react';
import TypewriterComponent from 'typewriter-effect';

import Styles from './Typewriter.module.css';

const TypewriterEffect = () => {
  const { theme } = useTheme();

  // Function to determine text color based on theme
  const getTextClassName = () =>
    theme === 'dark' ? Styles.darkText : Styles.lightText;
  return (
    <TypewriterComponent
      options={{
        loop: true,
        deleteSpeed: 750,
        wrapperClassName: `${Styles.typewriterWrapper} ${getTextClassName()}`,
      }}
      onInit={(typewirter) => {
        typewirter
          .typeString('MERN Developer')
          .pauseFor(2400)
          .deleteAll()
          .typeString('Mobile App Developer')
          .pauseFor(2500)
          .deleteAll()
          .typeString('Next.js Developer')
          .pauseFor(2500)
          .deleteAll()
          .typeString('ChatBot & AI Automation Developer')
          .pauseFor(2500)
          .start();
      }}
    />
  );
};

export default TypewriterEffect;

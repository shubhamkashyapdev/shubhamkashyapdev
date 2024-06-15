'use client';

import React from 'react';
import TypewriterComponent from 'typewriter-effect';

const TypewriterEffect = () => {
  return (
    <TypewriterComponent
      options={{ loop: true, deleteSpeed: 750 }}
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

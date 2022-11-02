import React from 'react';

import { Parragraph, SecondaryHeading } from '@/components/common';

const experiences = [
  {
    title: '4+',
    subTitle: 'Years of experience',
  },
  {
    title: '20+',
    subTitle: 'Projects completed',
  },
];

const ProblemSolver = () => {
  return (
    <section
      id="problemSolver"
      className="section flex flex-col md:flex-row md:space-x-10"
    >
      <div className="relative order-2 mt-6 flex flex-[4] items-center justify-evenly md:order-1">
        {/* box 1 */}
        {experiences.map((item, index) => (
          <div
            key={`experience-${index}`}
            className="centered w-[160px] md:p-4"
          >
            <h5 className="text-gradient text-5xl font-bold md:text-6xl">
              {item.title}
            </h5>
            <Parragraph className="mt-1 text-xl font-bold leading-[1.2em]">
              {item.subTitle}
            </Parragraph>
          </div>
        ))}

        {/* experience - bg text */}
        <span className="pointer-events-none absolute top-1/2 left-1/2 hidden -translate-y-1/2 -translate-x-1/2 -rotate-12 select-none text-6xl font-bold opacity-20 dark:inline-block">
          Experience
        </span>
      </div>
      <div className="order-1 mt-8 flex-[5] md:order-2 md:p-4 md:pl-0">
        <div className="centered">
          <h4 className="subtitle">/ &nbsp; Problem Solving</h4>
        </div>
        <div className="centered">
          <SecondaryHeading>
            I enjoy solving problems with clean and scalable solutions. I have a
            genuine passion for software application design.
          </SecondaryHeading>
        </div>
        <Parragraph className="centered">
          I have a solid background in developing web applications, mobile apps,
          and UI/UX designs. I also have a passion for curating large-scale
          applications with scalable architecture, understanding the problems,
          and coming up with creative solutions.
        </Parragraph>
      </div>
    </section>
  );
};

export default ProblemSolver;

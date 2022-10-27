import React from 'react';

import { FadeUpDown, Parragraph, PrimaryHeading } from '@/components/common';

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
    <section className="section mt-20 flex flex-col md:flex-row md:space-x-10">
      <div className="relative flex flex-[4] items-center justify-start sm:justify-center">
        {/* box 1 */}
        {experiences.map((item, index) => (
          <div key={`experience-${index}`} className="w-[160px] md:p-4">
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
      <div className="mt-8 flex-[5] md:p-4 md:pl-0">
        <FadeUpDown>
          <h4 className="subtitle">/ &nbsp; Problem Solving</h4>
        </FadeUpDown>
        <FadeUpDown delay={0.4}>
          <PrimaryHeading>
            I enjoy solving problems with clean and scalable solutions. I have a
            genuine passion for software application design.
          </PrimaryHeading>
        </FadeUpDown>
        <FadeUpDown delay={0.8}>
          <Parragraph>
            I have a solid background in developing web applications, mobile
            apps, and UI/UX designs. I also have a passion for curating
            large-scale applications with scalable architecture, understanding
            the problems, and coming up with creative solutions.
          </Parragraph>
        </FadeUpDown>
      </div>
    </section>
  );
};

export default ProblemSolver;

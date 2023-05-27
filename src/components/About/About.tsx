import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import type { TagType } from '@/types/component.types';

type AboutType = {
  tags: TagType[];
};

const About: FC<AboutType> = ({ tags }) => {
  return (
    <>
      <section className="my-20">
        <h2 className="text-lg uppercase tracking-widest text-primary-300">
          About
        </h2>
        <h3 className="text-gradient mb-4 text-5xl font-bold">
          Shubham Kashyap
        </h3>
        <article className="flex flex-col md:flex-row md:gap-10">
          <span className="md:order-2 md:w-[30%] md:px-4">
            <Image
              src="https://res.cloudinary.com/hexdev/image/upload/v1670609144/shubhamwebdesign/mebggyy7ai5t7t0jcg31.jpg"
              height={280}
              width={250}
              objectFit="cover"
              className=""
              alt=""
            />
          </span>
          <div className="mt-8 md:order-1 md:mt-0 md:w-[70%]">
            <p className="text-color">
              {`I began my web development journey in May 2020, right at the start of the pandemic. I decided to learn web development through a Udemy course and started exploring more about full stack JavaScript development by watching lots of YouTube videos. It has been an exciting and fulfilling experience as I've continued to grow my skills in web development.`}
            </p>
            <p className="text-color my-4">
              I chose MERN stack as my web development stack and larning from
              some great instructor like{' '}
              <a
                className="link"
                href="https://www.traversymedia.com/"
                target={'_blank'}
                rel="noreferrer"
              >
                Brad Traversy
              </a>
              ,{' '}
              <a
                className="link"
                href="https://codingheroes.io/"
                target={'_blank'}
                rel="noreferrer"
              >
                Jonas Schmedtmann
              </a>
              ,{' '}
              <a
                className="link"
                href="https://www.kevinpowell.co/"
                target="_blank"
                rel="noreferrer"
              >
                Kevin Powell
              </a>{' '}
              and many other instructors in my dev journey.
            </p>
            <p className="text-color">
              There are a lot of things and technologies to learn in web
              development and I am motivated to learn as much as possible. I
              enjoy learning something new and getting feedback to make myself
              better and improve.
            </p>
            <p className="text-color mt-4 mb-8">
              In this website I will be writing some blogs and showcase my
              projects. I believe that writing what I have learned and writing
              (documentation) is the best way to remember things, and I can
              share my knowledge along the way.{' '}
            </p>
          </div>
        </article>
      </section>
      <section className="flex flex-wrap justify-center gap-8">
        {tags.map((item: TagType, index: number) => (
          <div
            key={`about-${item.title}-${index}`}
            className="relative grid h-20 w-20 place-content-center rounded-sm bg-white shadow-sm duration-150 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          >
            <Image
              src={item.icon?.url || ''}
              alt={item.title}
              height={65}
              width={65}
              objectFit="contain"
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default About;

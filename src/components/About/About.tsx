import React from 'react';
import Image from 'next/image';
import {TechnologyItem,technologies} from '@/utils/tech-stack'
const About = () => {
  return (
    <>
      <section className="my-20  ">
        <h2 className="text-color text-3xl font-bold">About</h2>
        <h3 className="text-gradient text-3xl font-bold mb-4">
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
            />
          </span>
          <div className="md:order-1 mt-8 md:mt-0 md:w-[70%]">
            <p className="text-color">
              Hello! I'm Shubham. I started learning web development around May
              2020, which is the start of the pandemic. I have nothing much to
              do so I decided to learn web development from a udemy course, then
              started watching a bunch of youtube videos to explore more about
              web development especially full stack javascript development.
            </p>
            <p className="text-color my-4">
              I chose MERN stack as my web development stack and larning from
              some great instructor like{' '}
              <a
                className="link"
                href="https://www.traversymedia.com/"
                target={'_blank'}
              >
                Brad Traversy
              </a>
              ,{' '}
              <a
                className="link"
                href="https://codingheroes.io/"
                target={'_blank'}
              >
                Jonas Schmedtmann
              </a>
              ,{' '}
              <a
                className="link"
                href="https://www.kevinpowell.co/"
                target="_blank"
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
      <section className="flex flex-wrap gap-8 justify-center">
        {technologies.map((item: TechnologyItem, index: number) => (
          <div
            key={`about-${item.name}-${index}`}
            className="w-20 h-20 relative shadow-sm hover:shadow-lg hover:-translate-y-1 bg-white ease-in-out duration-150 grid place-content-center rounded-sm"
          >
            <Image
              src={item.imageURL}
              alt={item.name}
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

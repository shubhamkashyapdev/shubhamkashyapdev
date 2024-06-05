import { IconGlobe } from '@tabler/icons';
import React from 'react';
import { BrandGithub, FileAnalytics } from 'tabler-icons-react';

import Hightlight from '@/components/common/cards/Highlight';
import DownArrow from '@/components/common/elements/DownArrow';
import TypewriterEffect from '@/components/common/elements/TypewriterEffect';
import Parragraph from '@/components/common/typography/Parragraph';
import HeroCTA from '@/components/home/HeroCTA';

const Hero = () => {
  return (
    <div className="relative mb-16 mt-6 flex flex-col md:flex-row md:space-x-10">
      <div className="flex flex-[6] items-center ">
        <div>
          <h1 className="text-shadow-md dark:text-gradient text-center text-[40px] font-bold leading-[1.1em] text-primary-700 antialiased sm:text-[50px] md:text-left xl:text-[60px]">
            Hello, i am <br /> Shubham Kashyap.
          </h1>
          <h4 className="text-shadow-sm mt-2 text-center text-xl font-semibold text-primary-700 dark:text-white md:text-left md:text-2xl">
            <TypewriterEffect />
          </h4>
          <Parragraph className="centered mt-6">
            I am a full stack web & mobile developer with 3+ years of experience
            and i have worked on projects from website design with Next.js &
            TailwindCSS, MERN e-commerce website,{' '}
            <strong>mobile app development</strong>, blockchain application to{' '}
            <strong>MVP development</strong>. I can provide you full support
            from ideation, documentation, application development to deployment.
            If you have a project idea that {"you'd"} like to transform into a
            product, please {"don't"} hesitate to{' '}
            <a className="link" href="mailto:shubhamkashyapdev@gmail.com">
              reach out to me.
            </a>
          </Parragraph>

          <HeroCTA />
          {/* resume cta */}
          <div className="mt-4 flex items-center justify-center space-x-4 text-sm font-medium text-gray-800 dark:text-gray-600 md:justify-start">
            <a
              href="https://drive.google.com/file/d/1I_7yhlObc4anfo7r5Y4pRaW3-ft_sPw4/view?usp=sharing"
              target="_blank"
              className="flex  cursor-pointer items-center space-x-2 hover:text-primary-300"
              rel="noreferrer"
            >
              <FileAnalytics />
              Resume
            </a>

            <a
              href="https://github.com/shubhamkashyapdev"
              target="_blank"
              className="flex cursor-pointer items-center space-x-2 hover:text-primary-300"
              rel="noreferrer"
            >
              <BrandGithub /> @shubhamkashyapdev
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16 flex-1  md:mt-8 md:flex-[5]">
        <h4 className="text-shadow-sm text-gradient w-fit border-primary-700 text-lg font-semibold uppercase  tracking-wide">
          Highlights
        </h4>
        <div className="mt-4 flex flex-col space-y-4">
          <Hightlight
            icon={<IconGlobe />}
            title="Solana Raffle"
            subTitle="Web3, Solana, React,Typescript"
            tag="@nftmarketplace"
            route={'https://raffle-shubhamkashyapdev.vercel.app/'}
          >
            Solana Raffle is a full-stack web application with a Next.js,
            TailwindCSS, and Mantine UI frontend, coupled with a Node.js,
            Express.js, and MongoDB backend. The application enables users to
            participate in raffles by making SOL token payments and integrates
            with the Phantom Wallet for seamless transactions and an enhanced
            user experience.
          </Hightlight>
          <Hightlight
            icon={<IconGlobe />}
            title="Solana Minesweeper"
            subTitle="Anchor, Solana, React, Typescript"
            tag="@solanaminesweeper"
            route={'https://solana-minesweeper-game.pages.dev'}
          >
            Solana minesweeper game built with Next.js, solana wallet adapter
            and PiXi.js 2d animation library. The project uses the solana wallet
            adapter to handle the on chain transactions and the backend in built
            on Node.js + Express + Typescript and uses the socket.IO to handle
            the real time interactions.
          </Hightlight>
        </div>
      </div>
      {/* Down Arrow */}
      <DownArrow />
    </div>
  );
};

export default Hero;

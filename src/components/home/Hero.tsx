import { motion } from 'framer-motion';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import { BrandGithub, FileAnalytics } from 'tabler-icons-react';
import TypewriterComponent from 'typewriter-effect';

import { HeroCTA } from '@/components';
import { DownArrow, Hightlight, Parragraph } from '@/components/common';
import { fadeDown } from '@/components/common/animation/variants';

const Hero: FC = () => {
  return (
    <div className="relative mt-6 mb-16 flex flex-col md:flex-row md:space-x-6">
      <div className="flex flex-[6] items-center ">
        <div>
          <motion.h1
            variants={fadeDown}
            initial="initial"
            animate="animate"
            transition={{ ease: 'easeIn', duration: 0.4 }}
            className=" text-shadow-md dark:text-gradient text-center text-[56px] font-bold leading-[1.1em] text-primary-700 antialiased md:text-left"
          >
            Hello, i am Shubham Kashyap.
          </motion.h1>
          <motion.h4
            variants={fadeDown}
            initial="initial"
            animate="animate"
            transition={{ ease: 'easeIn', duration: 0.6 }}
            className="text-shadow-sm mt-2 text-center text-2xl font-semibold text-primary-700 dark:text-white md:text-left"
          >
            <TypewriterComponent
              options={{ loop: true }}
              onInit={(typewirter) => {
                typewirter
                  .typeString('MERN Developer')
                  .pauseFor(2400)
                  .deleteAll()
                  .typeString('UI Designer')
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString('Web3 Developer')
                  .pauseFor(2500)
                  .start();
              }}
            />
          </motion.h4>
          <motion.div
            variants={fadeDown}
            initial="initial"
            animate="animate"
            transition={{ ease: 'easeIn', duration: 0.8 }}
          >
            <Parragraph justified className="mt-6">
              I am a full stack javascript developer located in Chandigarh,
              India. I currenlty work for saffron chariot technologies as a
              developer, located in Chandigarh, India. I am experienced in
              developing full stack application with MERN stack technology.
            </Parragraph>
          </motion.div>
          <motion.div
            variants={fadeDown}
            initial="initial"
            animate="animate"
            transition={{ ease: 'easeIn', duration: 0.8 }}
          >
            <HeroCTA />
          </motion.div>
          {/* resume cta */}
          <motion.div
            variants={fadeDown}
            initial="initial"
            animate="animate"
            transition={{ ease: 'easeIn', duration: 0.8 }}
            className="mt-4 flex items-center justify-center space-x-4 text-sm font-medium text-gray-800 dark:text-gray-600 md:justify-start"
          >
            <Link href="/">
              <p className="flex  cursor-pointer items-center space-x-2 hover:text-primary-300">
                <FileAnalytics />
                Resume
              </p>
            </Link>
            <Link href="/">
              <p className="flex  cursor-pointer items-center space-x-2 hover:text-primary-300">
                <BrandGithub /> @shubhamwebdesign
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="mt-8  flex-1 md:flex-[5]">
        <motion.h4
          variants={fadeDown}
          initial="initial"
          animate="animate"
          transition={{ ease: 'easeIn', duration: 0.6 }}
          className="text-shadow-sm w-fit border-primary-700 text-lg font-medium tracking-wide text-gray-800  dark:text-gray-100"
        >
          Highlights
        </motion.h4>
        <motion.div
          variants={fadeDown}
          initial="initial"
          animate="animate"
          transition={{ ease: 'easeIn', duration: 0.8 }}
          className="mt-4 flex flex-col space-y-4"
        >
          <Hightlight
            title="NFT Marketplace"
            subTitle="Web3, Solidity, Typescript"
            tag="@nftmarketplace"
            route={'www.github.com/nft-marketplace'}
          >
            Next.js NFt Marketplace built with ethere.js and metamask. The smart
            contract is developed in solidity using the truffle framework. The
            project has a production grade setup with typescript and
            tailwindCSS, and custom react hooks.
          </Hightlight>
          <Hightlight
            title="Solana Minesweeper"
            subTitle="Anchor, Solana, Typescript"
            tag="@solanaminesweeper"
            route={'www.github.com/solana-minesweeper'}
          >
            Solana minesweeper game built with Next.js, solana wallet adapter
            and PiXi.js 2d animation library. The project uses the solana wallet
            adapter to handle the on chain transactions and the backend in built
            on Node.js + Express + Typescript and uses the socket.IO to handle
            the real time interactions.
          </Hightlight>
        </motion.div>
      </div>
      {/* Down Arrow */}
      <DownArrow />
    </div>
  );
};

export default Hero;

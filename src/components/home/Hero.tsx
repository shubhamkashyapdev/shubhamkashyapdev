import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import { BrandGithub, FileAnalytics } from 'tabler-icons-react';
import TypewriterComponent from 'typewriter-effect';

import { HeroCTA } from '@/components';
import { DownArrow, Hightlight, Parragraph } from '@/components/common';

const Hero: FC = () => {
  return (
    <div className="relative mt-6 mb-16 flex flex-col md:flex-row md:space-x-10">
      <div className="flex flex-[6] items-center ">
        <div>
          <h1 className="text-shadow-md dark:text-gradient text-center text-[40px] font-bold leading-[1.1em] text-primary-700 antialiased sm:text-[50px] md:text-left xl:text-[60px]">
            Hello, i am <br /> Shubham Kashyap.
          </h1>
          <h4 className="text-shadow-sm mt-2 text-center text-xl font-semibold text-primary-700 dark:text-white md:text-left md:text-2xl">
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
          </h4>
          <Parragraph className="centered mt-6">
            I am a full stack javascript developer located in Chandigarh, India.
            I currenlty work for saffron chariot technologies as a developer,
            located in Chandigarh, India. I am experienced in developing full
            stack application with MERN stack technology.
          </Parragraph>

          <HeroCTA />
          {/* resume cta */}
          <div className="mt-4 flex items-center justify-center space-x-4 text-sm font-medium text-gray-800 dark:text-gray-600 md:justify-start">
            
              <a href="" className="flex  cursor-pointer items-center space-x-2 hover:text-primary-300">
                <FileAnalytics />
                Resume
              </a>
           
              <a href="https://github.com/shubhamwebdesign" target="_blank" className="flex cursor-pointer items-center space-x-2 hover:text-primary-300">
                <BrandGithub /> @shubhamwebdesign
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
            title="NFT Marketplace"
            subTitle="Web3, Solidity, Typescript"
            tag="@nftmarketplace"
            route={'https://github.com/shubhamwebdesign/nft-marketplace-solidity-typescript'}
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
            route={'https://github.com/shubhamwebdesign/solana-minesweeper-frontend'}
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

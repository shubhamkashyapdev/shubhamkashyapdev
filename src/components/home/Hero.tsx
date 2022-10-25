import type { FC } from 'react';
import React from 'react';

import { HeroCTA } from '@/components';
import { Hightlight, Parragraph } from '@/components/common';

const Hero: FC = () => {
  return (
    <div className="mt-6 flex h-[80vh] flex-col space-x-6 md:flex-row">
      <div className="flex flex-[6] items-center ">
        <div>
          <h1 className=" text-shadow-md text-center text-[56px] font-bold leading-[1.1em] text-primary-700 antialiased dark:text-white md:text-left">
            Hello, i am Shubham Kashyap.
          </h1>
          <h4 className="text-shadow-sm mt-2 text-center text-2xl font-semibold text-primary-700 dark:text-white md:text-left">
            MERN Developer
          </h4>
          <Parragraph justified className="mt-8">
            I am a full stack javascript developer located in Chandigarh, India.
            I currenlty work for saffron chariot technologies as a senior
            developer, located in Chandigarh, India. I am well versed in MERN
            stack technology to build robust software solutions applications.
          </Parragraph>
          <HeroCTA />
        </div>
      </div>
      <div className="mt-8 flex-[5]">
        <h4 className="text-shadow-sm w-fit border-primary-700 text-lg font-medium tracking-wide text-gray-800  dark:text-gray-100">
          Highlights
        </h4>
        <div className="mt-4 flex flex-col space-y-4">
          <Hightlight
            title="NFT Marketplace"
            subTitle="Web3, Solidity, Typescript"
            tag="@nftmarketplace"
            route={'www.github.com/nft-marketplace'}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            tempora ducimus aliquid. Magnam minus architecto at aliquam
            obcaecati quibusdam tenetur!
          </Hightlight>
          <Hightlight
            title="Solana Minesweeper"
            subTitle="Anchor, Solana, Typescript"
            tag="@solanaminesweeper"
            route={'www.github.com/solana-minesweeper'}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            tempora ducimus aliquid. Magnam minus architecto at aliquam
            obcaecati quibusdam tenetur!
          </Hightlight>
        </div>
      </div>
    </div>
  );
};

export default Hero;

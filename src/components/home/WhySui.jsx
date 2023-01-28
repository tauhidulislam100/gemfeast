import Image from 'next/image';
import React, { useEffect, useRef } from 'react';


const WhySui = () => {

    return (
        <section id='whysui' className="mx-[6%] lg:mx-[8%] mt-14 lg:mt-[134px] text-center">
          <h2 data-animate className='text-3xl sm:text-[40px] lg:text-5xl text-secondary leading-[80px] font-black'>
            Why <span className='text-primary uppercase'>sui?</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-secondary">
            <div className="" data-animate>
              <div className="relative">
                <Image width={143} height={117} className="mx-auto" alt='Why sui 1' src="/img/money_icon.png" />
              </div>
              <p className='text-lg sm:text-2xl font-bold mt-8 sm:max-w-[199px] mx-auto'>
                Very low transaction fees
              </p>
            </div>
            <div className="" data-animate>
              <div className="relative">
                <Image width={143} height={117} className="mx-auto" alt='Why sui 2' src="/img/secure_icon.png" />
              </div>
              <p className='text-lg sm:text-2xl font-bold mt-8 sm:max-w-[199px] mx-auto'>
                Robust and secure network with true asset ownership
              </p>
            </div>
            <div className="" data-animate>
              <div className="relative">
                <Image width={143} height={117} className="mx-auto" alt='Why sui 3' src="/img/horigental_icon.png" />
              </div>
              <p className='text-lg sm:text-2xl font-bold mt-8 sm:max-w-[199px] mx-auto'>
                High Throughput with horizontal scalability
              </p>
            </div>
            <div className="text-center" data-animate>
              <div className="">
                <Image width={143} height={117} className="mx-auto" alt='Why sui 4' src="/img/storage_icon.png" />
              </div>
              <p className='text-lg sm:text-2xl font-bold mt-8 max-w-[235px] mx-auto'>
                Novel NFT standard with on-chain storage
              </p>
            </div>
          </div>
        </section>
    )
};

export default WhySui;
import Image from 'next/image';
import React from 'react';

const WhySui = () => {
    return (
        <section className="mx-[10%] mt-[70px] text-center">
          <h2 className='text-4xl sm:text-5xl md:text-[54px] text-secondary leading-[80px] font-black'>
            Why <span className='text-primary uppercase'>sui?</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-secondary">
            <div className="">
              <div className="relative">
                <Image width={143} height={117} className="mx-auto" src="/img/money_icon.png" />
              </div>
              <p className='text-2xl font-bold mt-8 max-w-[199px] mx-auto'>
                Very low transaction fees
              </p>
            </div>
            <div className="">
              <div className="relative">
                <Image width={143} height={117} className="mx-auto" src="/img/secure_icon.png" />
              </div>
              <p className='text-2xl font-bold mt-8 max-w-[199px] mx-auto'>
                Robust and secure network with true asset ownership
              </p>
            </div>
            <div className="">
              <div className="relative">
                <Image width={143} height={117} className="mx-auto" src="/img/horigental_icon.png" />
              </div>
              <p className='text-2xl font-bold mt-8 max-w-[199px] mx-auto'>
                High Throughput with horizontal scalability
              </p>
            </div>
            <div className=" text-center">
              <div className="">
                <Image width={143} height={117} className="mx-auto" src="/img/storage_icon.png" />
              </div>
              <p className='text-2xl font-bold mt-8 max-w-[235px] mx-auto'>
                Novel NFT standard with on-chain storage
              </p>
            </div>
          </div>
        </section>
    )
};

export default WhySui;
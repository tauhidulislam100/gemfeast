import Image from 'next/image';
import React from 'react';

const CoreFeature = () => {
    return (
        <section id="corefeatures" className='mx-[6%] lg:mx-[8%] text-center mt-20 md:mt-[134px]'>
          <h3 data-animate className='text-3xl sm:text-[40px] md:text-[40px] lg:text-5xl text-secondary lg:leading-[80px] font-black '>
            <span className='text-primary '>GEMFEAST</span> Core Features
          </h3>
          <div className="mt-14 lg:mt-[65px] flex flex-wrap justify-center gap-10 lg:gap-[58px]">
            <div data-animate className="max-w-[300px] px-8 py-[38px] bg-white rounded-[32px] border border-[#6FBCF0]">
              <div className="w-[120px] h-[120px] relative px-[23px] py-[23px] bg-[#6C57DB0F] mx-auto rounded-[32px]">
                <Image width={74} height={74} src="/img/create_icon.png" alt='Create' />
              </div>
              <div className="mt-7">
                <h5 className='text-secondary text-[28px] font-semibold'>CREATE</h5>
                <p className='mt-4 mx-3 text-center'> 
                  Create your NFT collection 
                  with our easy to use tools. 
                  Easily deploy to gemfeast 
                  and sell through auction
                  or fixed pricing.
                </p>
              </div>
            </div>
            <div data-animate className="max-w-[300px] px-8 py-[38px] bg-white rounded-[32px] border border-[#6FBCF0]">
              <div className="w-[120px] h-[120px] relative px-[23px] py-[23px] bg-[#6C57DB0F] mx-auto rounded-[32px]">
                <Image width={74} height={74} src="/img/trade_icon.png" />
              </div>
              <div className="mt-7">
                <h5 className='text-secondary text-[28px] font-semibold'>TRADE</h5>
                <p className='mt-4 text-center'> 
                Trade your favorite NFTs
                with on our intuitive user interface. Our portfolio manager helps you stay organized.
                </p>
              </div>
            </div>
            <div data-animate className="max-w-[300px] px-8 py-[38px] bg-white rounded-[32px] border border-[#6FBCF0]">
              <div className="w-[120px] h-[120px] relative px-[23px] py-[23px] bg-[#6C57DB0F] mx-auto rounded-[32px]">
                <Image width={74} height={74} src="/img/earn_icon.png" />
              </div>
              <div className="mt-7">
                <h5 className='text-secondary text-[28px] font-semibold'>EARN</h5>
                <p className='mt-4 text-center max-w-[218px]'> 
                  Stake FEAST token and get
                  a share of platform fees. Buy, list and sell NFTs to acquire reward points to boost your 
                  earnings. 
                </p>
              </div>
            </div>
            <div data-animate className="max-w-[300px] px-8 py-[38px] bg-white rounded-[32px] border border-[#6FBCF0]">
              <div className="w-[120px] h-[120px] relative px-[23px] py-[23px] bg-[#6C57DB0F] mx-auto rounded-[32px]">
                <Image width={74} height={74} src="/img/launch_icon.png" />
              </div>
              <div className="mt-7">
                <h5 className='text-secondary text-[28px] font-semibold'>LAUNCHPAD</h5>
                <p className='mt-4 mx-1 text-center'> 
                  Give your collection Link boost
                  by launching with us. Gemfeast is Link community of
                  merrymakers ready to rock your party.
                </p>
              </div>
            </div>
            <div data-animate className="max-w-[300px] px-8 py-[38px] bg-white rounded-[32px] border border-[#6FBCF0]">
              <div className="w-[120px] h-[120px] relative px-[23px] py-[23px] bg-[#6C57DB0F] mx-auto rounded-[32px]">
                <Image width={74} height={74} src="/img/investor_icon.png" />
              </div>
              <div className="mt-7">
                <h5 className='text-secondary text-[28px] font-semibold'>INVESTOR</h5>
                <p className='mt-4 text-center'> 
                  Insightful analytic tools for
                  investors to guide decision making. Custom alerts and notifications for NFT gems on your watchlist.
                </p>
              </div>
            </div>
          </div>
        </section>
    )
};

export default CoreFeature;
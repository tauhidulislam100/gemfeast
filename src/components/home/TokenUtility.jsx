import React from 'react';

const TokenUtility = () => {

    return (
        <section className="mx-[2%] lg:mx-[8%] mt-10 sm:mt-20 lg:mt-[180px] text-center md:pb-52">
          <h6 className='text-3xl xs:text-4xl sm:text-[40px] lg:text-5xl text-secondary font-black'>
            <span className='text-primary ml-3'>Feast</span> Token Utility
          </h6>
          <div className="mt-10 sm:mt-20 lg:mt-[133px] flex flex-wrap md:flex-nowrap gap-5 justify-center">
            <div className="bg-white border border-[#6FBCF0] rounded-[32px] z-30 max-w-[300px] md:translate-y-[26px] md:translate-x-9 lg:translate-x-[42px]">
              <div className="px-6 lg:px-8 py-[38px] min-h-[230px] lg:min-h-full">
                <h5 className='text-secondary text-xl md:text-2xl lg:text-[28px] md:w-[159px] lg:w-[217px] font-semibold uppercase'>STAKING</h5>
                <p className='mt-7 mx-auto text-center '> 
                  Stake feast to earn Link share of platform revenue. 
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#6FBCF0] rounded-[32px] z-20 max-w-[300px] md:translate-y-[75%]">
              <div className="px-6 lg:px-8 py-[38px]">
                <h5 className='text-secondary text-xl md:text-2xl lg:text-[28px] font-semibold uppercase'>GOVERNANCE</h5>
                <p className='mt-7 text-center lg:leading-[35px] '> 
                  FEAST stakers can make proposals and vote on proposals to shape the future of the Gemfeast marketplace
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#6FBCF0] rounded-[32px] z-10 max-w-[300px] md:-translate-x-9 lg:-translate-x-[48px]">
              <div className="px-6 lg:px-8 py-[38px] min-h-[230px] lg:min-h-full">
                <h5 className='text-secondary text-xl md:text-2xl lg:text-[28px] font-semibold uppercase'>WHITELISTING</h5>
                <p className='mt-7 text-center '> 
                  Commit FEAST to get whitelist spot for upcoming NFT launches
                </p>
              </div>
            </div>
          </div>
        </section>
    )
};

export default TokenUtility;
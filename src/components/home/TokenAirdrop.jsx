import Image from 'next/image';
import React from 'react';

const TokenAirdrop = () => {
    return (
        <section id='airdrop' className='mx-[8%] pt-[134px] text-center'>
          <h4 className='text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] text-secondary lg:leading-[80px] font-black'>
            Our Massive 
            <span className='text-primary'> FEAST Token Airdrop</span>
          </h4>
          <div className="mt-12 lg:flex flex-row-reverse gap-6">
            <div className="">
              <Image width={399} height={405} className=" w-[300px] xl:w-[399px] mx-auto" src="/img/airdrop_icon.png" />
            </div>
            <div className="flex-1 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 xs:gap-y-11 mt-10 lg:mt-auto">
              <div className="py-8">
                <div className="">
                  <span className='w-[38px] h-[38px] flex items-center justify-center rounded-lg bg-[#55ACEE] text-xl font-semibold text-white'>1</span>
                </div>
                <p className='xs:max-w-[172px] font-medium text-left mt-5'>5% of FEAST token total supply will airdrop to collectors.</p>
              </div>
              <div className="py-8">
                <div className="">
                  <span className='w-[38px] h-[38px] flex items-center justify-center rounded-lg bg-[#55ACEE] text-xl font-semibold text-white'>2</span>
                </div>
                <p className='xs:max-w-[172px] font-medium text-left mt-5'>7% of FEAST token total supply will airdrop to creators.</p>
              </div>
              <div className="py-8">
                <div className="">
                  <span className='w-[38px] h-[38px] flex items-center justify-center rounded-lg bg-[#55ACEE] text-xl font-semibold text-white'>3</span>
                </div>
                <p className='xs:max-w-[190px] font-medium text-left mt-5'>3% of FEAST token total supply will airdrop to CAPY owners</p>
              </div>
              <div className="py-8">
                <div className="">
                  <span className='w-[38px] h-[38px] flex items-center justify-center rounded-lg bg-[#55ACEE] text-xl font-semibold text-white'>4</span>
                </div>
                <p className='xs:max-w-[209px] font-medium text-left mt-5'>All airdrop campaigns will be concluded within 12 months of initial token generation event.</p>
              </div>
              <div className="py-8">
                <div className="">
                  <span className='w-[38px] h-[38px] flex items-center justify-center rounded-lg bg-[#55ACEE] text-xl font-semibold text-white'>5</span>
                </div>
                <p className='xs:max-w-[209px] font-medium text-left mt-5'>Airdrop will be conducted in multiple phases to allow for adequate and fair distribution to the community</p>
              </div>
            </div>
          </div>
        </section>
    )
};

export default TokenAirdrop;
import Image from 'next/image';
import React from 'react';

const Tokenomics = () => {
    
    return (
        <section id='tokenomics' className="mx-[6%] lg:mx-[8%] mt-10 sm:mt-16 lg:mt-[146px] text-center">
          <h5 data-animate id='tokenomics-title' className='text-3xl xs:text-4xl sm:text-[40px] lg:text-5xl text-secondary font-black'>
            <span className='text-primary ml-3'>Token</span>omics
          </h5>
          <div data-animate className="mt-10 md:mt-[70px] relative flex justify-center">
            <Image width={1003} height={672} src="/img/chart.png" alt='Tokenomics'/>
          </div>
        </section>
    )
};

export default Tokenomics;
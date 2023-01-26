import Image from 'next/image';
import React from 'react';

const Tokenomics = () => {
    return (
        <section id='tokenomics' className="mx-[10%] pt-[114px] text-center">
          <h5 className='text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] text-secondary font-black'>
            <span className='text-primary ml-3'>Token</span>omics
          </h5>
          <div className="mt-[70px] relative flex justify-center">
            <Image width={1003} height={672} src="/img/chart.png" />
          </div>
        </section>
    )
};

export default Tokenomics;
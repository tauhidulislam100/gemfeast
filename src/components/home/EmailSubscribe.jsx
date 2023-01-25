import React from 'react';

const EmailSubscribe = () => {
    return (
        <section className='mt-[83px] bg-custom-gradient pb-[170px] mb-[200px]'>
          <h5 className='text-3xl sm:text-4xl md:text-5xl text-white font-black pt-8 text-center'>Gemfeast Community</h5>
          <div className="absolute z-10 w-full">
            <div className="relative mx-[8%] lg:mx-[10%] bg-white md:flex items-center gap-3 shadow-xl justify-between rounded-[32px] px-7 xs:px-9 lg:px-12 py-8 xs:py-10 lg:py-16 mt-12 ">
              <div className="">
                <h6 className='text-2xl lg:text-[32px] text-secondary font-bold '>Join the party!</h6>
                <p className='text-base lg:text-xl font-light mt-3 md:max-w-[220px] lg:max-w-[350px] xl:max-w-[480px]'>It’s Link gem feast for every NFT enthusiast on the SUI blockchain</p>
              </div>
              <div className="py-1.5 lg:py-3 pl-6 pr-3.5 max-w-[450px] flex items-center gap-5 shadow border border-[#E8E9EA] rounded-[32px] mt-4 md:mt-0 flex-1">
                <input type="email" className='w-full focus:outline-none text-secondary' placeholder='Enter your email address..' name="" id="" />
                <button className='px-4 lg:px-6 xl:px-12 py-2 lg:py-3 xl:py-[15.5px] xl:text-lg font-medium text-white bg-custom-gradient rounded-full'>Subscribe</button>
              </div>
            </div>
            <div className='absolute -z-10 left-32 -bottom-8 w-[130px] h-[130px] bg-white/80 rounded-bl-[90px]' />
          </div>
        </section>
    )
};

export default EmailSubscribe;
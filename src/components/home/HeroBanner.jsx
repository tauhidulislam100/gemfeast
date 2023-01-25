import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import SwiperCore, { Navigation } from "swiper";

const HeroBanner = () => {

    return (
      <div className="">
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
        clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-[full] h-[full] ml-0"
      >
        <SwiperSlide className='flex justify-center items-center'>
          <div className='mx-[8%] mt-12 bg-white rounded-[32px]'>
            <div className='pl-12 mdpr-12 md:pr-0 py-12 md:flex flex-row-reverse items-center gap-6'>
              <div className='hidden sm:block'>
                <Image width={470} height={500} className="mx-auto w-[300px] xs:w-[400px] md:w-[470px]" src="/img/hero_banner.png" alt='Banner Image' />
              </div>
              <div className='flex-1'>
                <h1 className='text-3xl xs:text-4xl lg:text-[54px] text-secondary lg:leading-[80px] font-bold'>
                  <span className='text-primary'>NFT</span> marketplace for  
                  <span className='text-primary'> SUI</span> fans
                </h1>
                <p className='text-lg lg:text-2xl lg:leading-9 text-[#6D6F6E] font-medium mt-2 lg:mt-0'>
                  Create, Collect and Invest in premium NFT assets on the SUI network. Our community driven approach makes NFT trading fun and lets you earn while doing it. And if you are in it for the art, you are welcome to feast with us. 
                </p>
                <div className='mt-5 lg:mt-10 flex items-center gap-3'>
                  <button className='px-7 lg:px-12 py-2 lg:py-3.5 text-base lg:text-xl font-medium md:font-semibold text-white bg-gradient-to-r to-primary from-secondary rounded-full'>Explore</button>
                  <Link href={'/'}>
                    <p className='px-6 flex items-center gap-3 lg:text-xl text-primary font-semibold whitespace-nowrap'>Join our community <HiOutlineArrowRight /></p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    )
};

export default HeroBanner;
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";

const nftImages = [
  { title: 'Chinese panda', imgUrl: '/img/chinese-panda.png' },
  { title: 'Panda with bamboo', imgUrl: '/img/pandawithbamboo.png' },
  { title: 'Bone over head', imgUrl: '/img/boneoverhead.png' },
];

const HeroBanner = () => {

    return (
      <div className="mx-[8%] mt-10 xl:mt-24">

        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2.5}
            initialSlide={1}
            coverflowEffect={{
              rotate: 0,
              stretch: 20,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{
              clickable: true,
              type: 'bullets', }}
            modules={[Pagination, EffectCoverflow]}
            className="mySwiper h-[77vh] w-full pb-5"
            >
              {
                nftImages.map((slide, index) => (
                <SwiperSlide key={`hero_${index}`}>
                  {({isActive, isPrev}) => <Image 
                        sizes='50vw' 
                        fill 
                        src={slide.imgUrl} className={`relative -z-10 transition-all duration-300 ease-in-out ${!isActive ? 'opacity-80': ''} ${isPrev && index === 0 ? 'scale-[0.72]' : ''}`}  alt='Chinese panda' />}
                </SwiperSlide>
                ))
              }
        </Swiper>
        
          <div className='mt-12'>
            <div className='pl-12 mdpr-12 md:pr-0 py-12 gap-6'>
              <div className='flex-1'>
                <h1 className='text-3xl xs:text-4xl lg:text-[54px] text-secondary lg:leading-[80px] font-bold text-center'>
                  <span className='text-primary'>NFT</span> marketplace for  
                  <span className='text-primary'> SUI</span> fans
                </h1>
                <p className='text-lg lg:text-2xl lg:leading-9 text-[#6D6F6E] font-medium mt-7'>
                  Create, Collect and Invest in premium NFT assets on the SUI network. Our community driven approach makes NFT trading fun and lets you earn while doing it. And if you are in it for the art, you are welcome to feast with us. 
                </p>
                <div className='mt-10 lg:mt-10 flex items-center gap-3'>
                  <button className='px-7 lg:px-12 py-2 lg:py-3.5 text-base lg:text-xl font-medium md:font-semibold text-white bg-gradient-to-r to-primary from-secondary rounded-full'>Explore</button>
                  <Link href={'/'}>
                    <p className='px-6 flex items-center gap-3 lg:text-xl text-primary font-semibold whitespace-nowrap'>Join our community <HiOutlineArrowRight /></p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
};

export default HeroBanner;
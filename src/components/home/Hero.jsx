import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";
import { useMediaQuery } from 'react-responsive';

const nftImages = [
  { title: 'Chinese panda', imgUrl: '/img/slide/1.png' },
  { title: 'Chinese panda', imgUrl: '/img/slide/3.jpg' },
  { title: 'Chinese panda', imgUrl: '/img/slide/2.gif' },
  { title: 'Chinese panda', imgUrl: '/img/slide/4.png' },
  { title: 'Chinese panda', imgUrl: '/img/slide/5.png' },
  { title: 'Chinese panda', imgUrl: '/img/slide/6.png' },
  { title: 'Chinese panda', imgUrl: '/img/slide/7.png' },
  { title: 'Chinese panda', imgUrl: '/img/slide/8.png' },
  { title: 'Chinese panda', imgUrl: '/img/slide/9.gif' },
];

const HeroBanner = () => {

    const isMobile = useMediaQuery({ minWidth: '320px', maxWidth: '769px' })
    const isXl = useMediaQuery({ minWidth: '1280px', maxWidth: '1535px' })
    const is2xl = useMediaQuery({ minWidth: '1536px', maxWidth: '1919px' })
    const is3xl = useMediaQuery({ minWidth: '1920px', maxWidth: '2559px' })
    const is4xl = useMediaQuery({ minWidth: '2560px' })

    return (
      <div className="pt-24 md:pt-32 mx-[4%] md:mx-[6%] lg:mx-[8%] 4xl:mx-auto 4xl:max-w-[1920px] transition-all duration-500 ease-in-out">
        <Swiper
            id='slider'
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={ isMobile ? 2.1 : isXl ? 4.2 : is2xl ? 3.5 : is3xl ? 3.3 : is4xl ? 2.8 : 3}
            initialSlide={1}
            loop
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
            className="mySwiper h-[245px] md:h-[300px] lg:h-[350px] xl:h-[300px] 2xl:h-[400px] 3xl:h-[550px] 4xl:h-[800px] w-full md:pb-2 2xl:pb-5"
            >
              {
                nftImages.map((slide, index) => (
                <SwiperSlide key={`hero_${index}`}>
                  {({isActive, isPrev}) => <Image
                        data-animate
                        fill 
                        priority
                        src={slide.imgUrl} 
                        className={`
                          relative -z-10 transition-all duration-300 ease-in-out rounded-lg 
                          ${!isActive ? 'contrast-[.60]': ''} 
                          ${{/* isPrev && index === 0 ? 'scale-[0.72]' : '' */ }}
                          `}  
                          alt='Chinese panda' />}
                </SwiperSlide>
                ))
              }
        </Swiper>
        <div id='marketplace' className='mt-4 2xl:mt-12'>
          <div className='flex-1'>
            <h1 data-animate className='text-3xl lg:text-4xl 2xl:text-[54px] text-secondary 2xl:leading-[80px] font-bold text-center'>
              <span className='text-primary'>NFT</span> marketplace for  
              <span className='text-primary'> SUI</span> fans
            </h1>
            <p data-animate className='text-base sm:text-lg 2xl:text-2xl lg:leading-9 text-[#6D6F6E] font-medium mt-3 lg:mt-5 2xl:mt-7'>
              Create, Collect and Invest in premium NFT assets on the SUI network. Our community driven approach makes NFT trading fun and lets you earn while doing it. And if you are in it for the art, you are welcome to feast with us. 
            </p>
            <div data-animate className='mt-6 2xl:mt-10 flex items-center gap-3'>
              <button className='px-7 lg:px-12 py-2 lg:py-3.5 transition-all duration-300 ease-in-out text-base 2xl:text-xl font-medium md:font-semibold text-white bg-custom-gradient rounded-full'>Explore</button>
              <Link href={'/'}>
                <button className='px-6 flex items-center gap-3 text-base 2xl:text-xl text-primary font-semibold whitespace-nowrap hover:text-secondary'>Join our community <HiOutlineArrowRight /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
};

export default HeroBanner;
import Image from 'next/image';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const Team = () => {

    const swiperRef = useRef();
    const sliderSettings = {
        300: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
    };

    const teams = [
        {name: 'Bob', title: 'Founder', imgUrl: '/img/team_1.png'},
        {name: 'Badablue', title: 'Co-founder', imgUrl: '/img/team_2.png'},
        {name: 'Bulaba', title: 'CTO', imgUrl: '/img/team_3.png'},
        {name: 'Bob', title: 'Founder', imgUrl: '/img/team_1.png'},
        {name: 'Badablue', title: 'Co-founder', imgUrl: '/img/team_2.png'},
        {name: 'Bulaba', title: 'CTO', imgUrl: '/img/team_3.png'},
    ];

    return (
        <section id='team' className="mx-[8%] md:mt-[134px]">
            <h6 className='text-3xl xs:text-4xl md:text-5xl lg:text-[54px] text-center text-secondary lg:leading-[80px] font-black'>
                <span className='text-primary ml-3'>Meet</span> the Team
            </h6>
            <div className="mt-[50px] xs:mt-[91px] flex gap-[90px] items-center justify-center">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={sliderSettings}
                    onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                    }}
                    modules={[Pagination]}
                    className="w-[80%] lg:w-[65%] h-full ml-0"
                >
                    {
                        teams.map((team, idx) => (
                            <SwiperSlide key={idx} className='flex justify-center items-center select-none'>
                                <div className="w-full">
                                    <div className="relative w-[150px] xl:w-[189px] h-[156px] xl:h-[183px] mx-auto rounded-full">
                                        <Image className='rounded-full overflow-hidden object-cover' fill  src={team.imgUrl} alt='Team' />
                                    </div>
                                    <div className="mt-8 xs:mt-11 xl:mt-[55px] text-center">
                                    <h6 className='text-[30px] text-secondary font-semibold'>{team.name}</h6>
                                    <p className='text-xl text-secondary mt-3 xs:mt-6'>{team.title}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    {/* <SwiperSlide className='flex justify-center items-center'>
                        <div className="w-full">
                            <div className="relative w-[150px] xl:w-[189px] h-[156px] xl:h-[183px] rounded-full">
                                <Image className='rounded-full overflow-hidden object-cover' fill  src="/img/team_1.png" alt='Team' />
                            </div>
                            <div className="mt-8 xs:mt-11 xl:mt-[55px] text-center">
                            <h6 className='text-[30px] text-secondary font-semibold'>Bob</h6>
                            <p className='text-xl text-secondary mt-3 xs:mt-6'>Founder</p>
                            </div>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
            </div>
            <div className="flex gap-5 justify-center items-center mt-[30px] xs:mt-[50px] md:mt-[70px]">
                <div onClick={() => swiperRef.current?.slidePrev()} className="w-[50px] xs:w-[70px] lg:w-[90px] h-[50px] xs:h-[70px] lg:h-[90px] rounded-full bg-[#E6E6E6] flex items-center justify-center hover:bg-primary cursor-pointer hover:text-white">
                    <BsArrowLeft className='text-xl sm:text-2xl md:text-3xl lg:text-4xl' />
                </div>
                <div onClick={() => swiperRef.current?.slideNext()} className="w-[50px] xs:w-[70px] lg:w-[90px] h-[50px] xs:h-[70px] lg:h-[90px] rounded-full bg-[#E6E6E6] flex items-center justify-center hover:bg-primary cursor-pointer hover:text-white">
                    <BsArrowRight className='text-xl sm:text-2xl md:text-3xl lg:text-4xl' />
                </div>
            </div>
        </section>
    )
};

export default Team;
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';
const Drawer = dynamic(() => import('react-modern-drawer'), { ssr: false });

const Header = () => {

    
    const [headerFixed, setHeader] = useState(false);
    const [open, setOpen] = React.useState(false);
    const headerRef = useRef(null);
    const onChange = (bool) => {
      // console.log('change: ', bool);
    };
    const isTablet = useMediaQuery({ minWidth: '768px' });
    const onTouchEnd = () => {
      setOpen(false);
    };
    const onSwitch = () => {
      setOpen(c => !c);
    };

    useEffect(()=> {

      if(headerRef.current){
        const headerPos = headerRef.current?.getBoundingClientRect().top;
        window.addEventListener('scroll', () => {
          var currentPos = window.pageYOffset;
          if(currentPos > headerPos){
              setHeader(true);
          }else{
              setHeader(false);
          }
        });
      }
      
    },[isTablet]);
    
    return (
        <header ref={headerRef} id='header' className={`z-[9999]  px-[4%] lg:px-[8%] py-4 transition-all duration-500 ease-in-out ${headerFixed ? 'w-full fixed top-0 md:py-5 bg-white/90 shadow-lg' : 'md:relative md:shadow-none md:pt-8 lg:pt-14 md:bg-transparent'}`}>
          <div className='flex justify-between items-center md:ml-[30px] gap-10'>
            <Link href={'/'} className='relative min-w-[71px]'>
              <div className='w-8 h-8 sm:hidden'>
                <Image fill src="/logo.svg" alt='Logo' />
              </div>
              <Image width={71} height={47} src="/logo.svg" alt='Logo' className='hidden sm:block  lg:hidden' />
              <Image width={169} height={47} src="/logo_with_title.svg" alt='Logo' className='hidden lg:block' />
            </Link>
            <nav className='hidden sm:block'>
              <ul className='flex items-center gap-3 md:gap-7 xl:gap-16'>
                <li className='px-2 hover:text-primary'>
                  <Link scroll={false} href={'#airdrop'}>Airdrop</Link>
                </li>
                <li className='px-2 hover:text-primary'>
                  <Link scroll={false} href={'#tokenomics'}>Tokenomics</Link>
                </li>
                <li className='px-2 hover:text-primary'>
                  <Link scroll={false} href={'#community'}>Community</Link>
                </li>
                <li className='px-2 hover:text-primary'>
                  <Link scroll={false} href={'/#team'}>Team</Link>
                </li>
              </ul>
            </nav>
            <div className="text-3xl text-secondary sm:hidden">
              <svg onClick={() => setOpen(true)} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <g><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"></path></g>
              </svg>
            </div>
          </div>
          <Drawer
            open={open}
            onClose={onTouchEnd}
            direction="left"
            className='p-5'
          >
            <div className="">
              <Link href={'/'} onClick={() => setOpen(prev => !prev)}>
                <Image width={169} height={47} src="/logo_with_title.svg" alt='Logo' className='' />
              </Link>
            </div>
            <ul onClick={() => setOpen(prev => !prev)} className='mt-10 text-lg space-y-2'>
              <li className='px-2 hover:text-primary'>
                <Link scroll={false} href={'#airdrop'}>Airdrop</Link>
              </li>
              <li className='px-2 hover:text-primary'>
                <Link scroll={false} href={'#tokenomics'}>Tokenomics</Link>
              </li>
              <li className='px-2 hover:text-primary'>
                <Link scroll={false} href={'#community'}>Community</Link>
              </li>
              <li className='px-2 hover:text-primary'>
                <Link scroll={false} href={'/#team'}>Team</Link>
              </li>
            </ul>
          </Drawer>
        </header>
    )
};

export default Header;
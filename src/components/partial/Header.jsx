import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Drawer from 'react-modern-drawer'
const Header = () => {

  const [open, setOpen] = React.useState(false);
  const onChange = (bool) => {
    // console.log('change: ', bool);
  };
  const onTouchEnd = () => {
    setOpen(false);
  };
  const onSwitch = () => {
    setOpen(c => !c);
  };

    return (
        <header className='mx-[4%] lg:mx-[8%] pt-5 md:pt-8 lg:pt-14'>
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
          >
            <div className="p-5">
              <Image width={169} height={47} src="/logo_with_title.svg" alt='Logo' className='' />
            </div>
          </Drawer>
        </header>
    )
};

export default Header;
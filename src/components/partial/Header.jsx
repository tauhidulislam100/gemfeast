import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='mx-[8%] pt-5 sm:pt-14'>
          <div className='flex justify-between items-center md:ml-[30px] gap-10'>
            <Link href={'/'} className='relative min-w-[71px]'>
              <Image width={71} height={47} src="/logo.svg" alt='Logo' className='md:hidden' />
              <Image width={169} height={47} src="/logo_with_title.svg" alt='Logo' className='hidden md:block' />
            </Link>
            <nav className='overflow-x-auto'>
              <ul className='flex items-center gap-3 md:gap-7 xl:gap-16'>
                <li className='px-2 hover:text-primary'>
                  <Link href={'#airdrop'}>Airdrop</Link>
                </li>
                <li className='px-2 hover:text-primary'>
                  <Link href={'#tokenomics'}>Tokenomics</Link>
                </li>
                <li className='px-2 hover:text-primary'>
                  <Link href={'#community'}>Community</Link>
                </li>
                <li className='px-2 hover:text-primary'>
                  <Link href={'/#team'}>Team</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
    )
};

export default Header;
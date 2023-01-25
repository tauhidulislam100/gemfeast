import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="text-[#213D39] mx-[8%] ">
          <div className="border-y border-gray-300 pt-14 pb-[62px] mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <Link href={"/"} className="relative">
                <Image width={169} height={47} className="mx-auto md:mx-0" src="/img/gemfeast_logo.png" />
              </Link>
              <p className="mt-[22px] text-sm ">Some footer text about the  Agency. Just a little description to help people understand you better</p>
              <div className="mt-[31px]">
                <ul className='flex items-center justify-center gap-4'>
                  <li>
                    <Link href={"/"}>
                      <Image width={36} height={36} src="/img/telegram.svg" />
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <Image width={36} height={36} src="/img/twitter.svg" />
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <Image width={36} height={36} src="/img/discord.svg" />
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <Image width={36} height={36} src="/img/medium.svg" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="font-semibold text-2xl text-[#213D39] tracking-widest">What We Do</h2>
                <nav className="list-none mt-5 mb-10">
                  <li>
                    <Link href={"/"} className="text-[#213D39] hover:text-gray-800">Lorem Ipsum</Link>
                  </li>
                  <li>
                    <Link href={"/"} className="text-[#213D39] hover:text-gray-800">Lorem Ipsum</Link>
                  </li>
                  <li>
                    <Link href={"/"} className="text-[#213D39] hover:text-gray-800">Lorem Ipsum</Link>
                  </li>
                  <li>
                    <Link href={"/"} className="text-[#213D39] hover:text-gray-800">Lorem Ipsum</Link>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="font-semibold text-2xl text-[#213D39] tracking-widest">Company</h2>
                <nav className="list-none mt-5 mb-10">
                  <li>
                    <Link href={"/"} className="text-[#213D39] hover:text-gray-800">Lorem Ipsum</Link>
                  </li>
                  <li>
                    <Link href={"/"} className="text-[#213D39] hover:text-gray-800">Lorem Ipsum</Link>
                  </li>
                  <li>
                    <Link href={"/"} className="text-[#213D39] hover:text-gray-800">Lorem Ipsum</Link>
                  </li>
                  <li>
                    <Link href={"/"} className="text-[#213D39] hover:text-gray-800">Lorem Ipsum</Link>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="font-semibold text-2xl text-[#213D39] tracking-widest">Support</h2>
                <nav className="list-none mt-5 mb-10">
                  <li>
                    <Link href={"/"} className="text-[#213D39] hover:text-gray-800">Lorem Ipsum</Link>
                  </li>
                  <li>
                    <Link href={"/"} className="text-[#213D39] hover:text-gray-800">Lorem Ipsum</Link>
                  </li>
                  <li>
                    <Link href={"/"} className="text-[#213D39] hover:text-gray-800">Lorem Ipsum</Link>
                  </li>
                  <li>
                    <Link href={"/"} className="text-[#213D39] hover:text-gray-800">Lorem Ipsum</Link>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="font-semibold text-2xl text-[#213D39] tracking-widest">Contact</h2>
                <nav className="list-none mt-5 mb-10">
                  <li>
                    <Link href={"/"} className="text-[#213D39] hover:text-gray-800">Lorem Ipsum</Link>
                  </li>
                  <li>
                    <Link href={"/"} className="text-[#213D39] hover:text-gray-800">Lorem Ipsum</Link>
                  </li>
                  <li>
                    <Link href={"/"} className="text-[#213D39] hover:text-gray-800">Lorem Ipsum</Link>
                  </li>
                  <li>
                    <Link href={"/"} className="text-[#213D39] hover:text-gray-800">Lorem Ipsum</Link>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center py-4">
            <p className="text-[#213D39] text-center font-medium">Copyright &copy; 2023 Gemfeast. All rights reserved</p>
          </div>
        </footer>
    )
};

export default Footer;
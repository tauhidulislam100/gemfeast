import Head from 'next/head'
import Header from '@/components/partial/Header'
import Footer from '@/components/partial/Footer'
import { Hero, WhySui, CoreFeatures, 
        TokenAirdrop, Tokenomics, TokenUtility, 
        Roadmap, Team, EmailSubscribe, 
      } from '@/components'
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useMediaQuery } from 'react-responsive';
gsap.registerPlugin(ScrollTrigger);

const _ease1 = "back(1.7)";

export default function Home() {

    const [isMounted, setMounted] = useState(false);
    const homeRef = useRef(null);

    const isTablet = useMediaQuery({ minWidth: '768px' });

    useEffect(() => {
      setMounted(true);
      const fixHeader = (screenSelector) => {
        const id = document?.querySelector(screenSelector);
        gsap.to(id,{
          scrollTrigger: {
            trigger: id,
            start: 'top',
            toggleClass: {
              className: 'fixed pt-0',
              targets: 'relative pt-5'
            }
          }
        })
      };
      const animateTitle = (screenSelector) => {
        const titleId = document?.querySelector(screenSelector);
        gsap.fromTo(titleId,{
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: titleId,
            toggleActions: "play pause resume reset",
            onUpdate: () => {
              console.log(titleId);
            },
          },
        })
      }
      const animateScreen = (
        screenSelector,
        childSelector = "[data-animate]"
      ) => {
        const screen = document?.querySelector(screenSelector);
        const frameGroup = gsap.utils.toArray(
          screen?.querySelectorAll(childSelector)
        );
        gsap.set(frameGroup, {
          opacity: 0,
          y: 80,
        });
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: screen,
            toggleActions: "play pause resume reset",
            onUpdate: () => {
              // console.log({ screenSelector, childSelector });
            },
          },
        });
        timeline.to(frameGroup, {
          delay: 0.3,
          opacity: 1,
          y: 0,
          stagger: {
            amount: 0.3,
          },
        });
      };

      if(homeRef.current && isTablet && isMounted){
        // fix header
        fixHeader("#header");
        // fix header
        animateTitle("#airdrop-title");
        animateTitle("#utility-title");
        animateTitle("#roadmap-title");
        // animateScreen("#marketplace");
        // animateTitle("#slider");
        animateScreen("#whysui");
        animateScreen("#corefeatures");
        animateScreen("#airdrops-items");
        animateScreen("#tokenomics");
        animateScreen("#utility-items");
        animateScreen("#roadmap1");
        animateScreen("#roadmap2");
        animateScreen("#roadmap3");
        animateScreen("#team");
        animateScreen("#community");
        animateScreen("#footer");
      }
    
    },[isTablet, isMounted]);

  return (
    <div ref={homeRef} id="body" className='md:bg-[url("/img/renft/background.jpg")] bg-no-repeat bg-cover'>
      {
        isMounted ? 
        <>
          <Header homeRef={homeRef} />
          <Hero />
          <WhySui />
          <CoreFeatures />
          <TokenAirdrop />
          <Tokenomics />
          <TokenUtility />
          <Roadmap />
          <Team />
          <EmailSubscribe />
          <Footer />
        </>:
        <div className="min-h-screen h-screen flex justify-center items-center">
          <div className="text-3xl animate-spin text-primary">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M3.055 13H5.07a7.002 7.002 0 0 0 13.858 0h2.016a9.001 9.001 0 0 1-17.89 0zm0-2a9.001 9.001 0 0 1 17.89 0H18.93a7.002 7.002 0 0 0-13.858 0H3.055z"></path></g></svg>
          </div>
        </div>
      }
    </div>
  )
}

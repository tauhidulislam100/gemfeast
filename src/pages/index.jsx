import Head from 'next/head'
import Header from '@/components/partial/Header'
import Footer from '@/components/partial/Footer'
import { Hero, WhySui, CoreFeatures, 
        TokenAirdrop, Tokenomics, TokenUtility, 
        Roadmap, Team, EmailSubscribe, 
      } from '@/components'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useMediaQuery } from 'react-responsive';
gsap.registerPlugin(ScrollTrigger);

const _ease1 = "back(1.7)";

export default function Home() {

    const homeRef = useRef(null);

    const isTablet = useMediaQuery({ minWidth: '768px' });

    useEffect(() => {
      
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
          screen.querySelectorAll(childSelector)
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

      if(homeRef.current && isTablet){
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
    
    },[isTablet]);

  return (
    <div ref={homeRef} className='md:bg-[url("/img/gem_feast_bg.png")] bg-no-repeat bg-cover'>
      <Header />
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
    </div>
  )
}

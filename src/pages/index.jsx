import Head from 'next/head'
import Header from '@/components/partial/Header'
import Footer from '@/components/partial/Footer'
import { Hero, WhySui, CoreFeatures, 
        TokenAirdrop, Tokenomics, TokenUtility, 
        Roadmap, Team, EmailSubscribe, 
      } from '@/components'

export default function Home() {
  return (
    <div className='bg-[url("/img/gem_feast_bg.png")] bg-no-repeat bg-cover'>
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

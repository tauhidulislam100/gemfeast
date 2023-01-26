import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth'>
      <Head />
      <body className='font-urbanist scrollbar-thin scrollbar-thumb-primary/70'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

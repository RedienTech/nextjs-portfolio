import Head from 'next/head'
import React from 'react';
import AboutMe from '../componentes/landing/about-me';
import FifthBlock from '../componentes/landing/fifth-block';
import FirstBlock from '../componentes/landing/first-block';
import FourthBlock from '../componentes/landing/fourth-block';
import ThirdBlock from '../componentes/landing/third-block';


export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Neider Arroyo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FirstBlock />
      <AboutMe />
      <ThirdBlock />
      <FourthBlock />
      <FifthBlock />
    </React.Fragment>
  )
}

import Head from 'next/head'
import React from 'react';
import FirstBlock from '../componentes/landing/first-block';
import FourthBlock from '../componentes/landing/fourth-block';
import SecondBlock from '../componentes/landing/second-block';
import ThirdBlock from '../componentes/landing/third-block';


export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Neider Arroyo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
    </React.Fragment>
  )
}

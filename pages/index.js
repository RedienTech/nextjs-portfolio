import Head from 'next/head'
import React from 'react';
import AboutMe from '../componentes/landing/about-me';
import FifthBlock from '../componentes/landing/fifth-block';
import FirstBlock from '../componentes/landing/first-block';
import FourthBlock from '../componentes/landing/fourth-block';
import ThirdBlock from '../componentes/landing/third-block';
import {Helmet} from 'react-helmet';


export default function Home() {
  return (
    <React.Fragment>
      <Helmet >
        <title>Redien | Home</title>
        <html lang="es"></html>
        <meta name="description" content="Informacion sobre mi y mis facultades en Programacion Web"/>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <FirstBlock />
      <AboutMe />
      <ThirdBlock />
      <FourthBlock />
      <FifthBlock />
    </React.Fragment>
  )
}

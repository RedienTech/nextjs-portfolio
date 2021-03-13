import App from 'next/app';
import emailjs from 'emailjs-com'
import Aos from "aos";
import 'aos/dist/aos.css';
import '../public/App.css'

import React, {useEffect} from 'react';
import Layout from '../componentes/layout/layout';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {

    useEffect(() => {
        Aos.init({duration: 1000});
        emailjs.init("user_mtzbt1nZb8VF4S9GxLmSM");
    })

    return <React.Fragment>
        <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>


        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </React.Fragment>
}
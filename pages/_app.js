import App from 'next/app';
import emailjs from 'emailjs-com'
import Aos from "aos";
import 'aos/dist/aos.css';
import '../public/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import React, {useEffect} from 'react';
import Layout from '../componentes/layout/layout';

export default function MyApp({ Component, pageProps }) {

    useEffect(() => {
        Aos.init({duration: 1000});
        emailjs.init("user_mtzbt1nZb8VF4S9GxLmSM");
    })

    return <React.Fragment>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </React.Fragment>
}
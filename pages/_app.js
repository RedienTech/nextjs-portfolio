import App from 'next/app';
import '../public/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
import React from 'react';
import Layout from '../componentes/layout/layout';

export default function MyApp({ Component, pageProps }) {
    return <React.Fragment>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </React.Fragment>
}
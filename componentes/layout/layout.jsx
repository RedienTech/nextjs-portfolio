import React from 'react';
import Footer from './Footer';
import Header from './header';

export default function Layout({children}){
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    )
}
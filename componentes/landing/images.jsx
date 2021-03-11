import React, {Component} from 'react';
import Coding from '../../assets/coding.json';

export function Animation() {
     
    return(
        <img src="/landing.svg" alt=""/>
    )
}

export function ImageTec({src, children, name}) {
    return (
        <div className="col-md-2 col-sm-4">
            <img src={src} className="white mx-auto w-25 d-block pt-3 pb-2" />
            <h6 className="text-center name font-weight-bold">{name}</h6>
            <p className="w-50 mx-auto text-black text-center pb-5">{children}</p>
            <style jsx>{`
                .name {
                    color: black;
                }
            `}</style>
        </div>
    )
}

export function ImageNet({src, children, link}) {
    return (
        <div className="col-sm-4">
            <img src={src} className="white mx-auto w-25 d-block pt-5 pb-2" />
            <h5 className="text-center font-weight-bold text-white">{link}</h5>
            <p className="w-50 mx-auto text-white text-center pb-5">{children}</p>
            <style jsx>{`

            `}</style>
        </div>
    )
}
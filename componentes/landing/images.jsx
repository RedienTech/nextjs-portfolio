import React, {Component} from 'react';
import Coding from '../../assets/coding.json';
import Lottie from 'react-lottie'

export class Animation extends Component {
    render(){
        const settings = {
            loop: true,
            autoplay: true,
            animationData: Coding
        }
        
    return(
        <Lottie className="my-auto" options={settings}/>
    )
    }
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
        <div className="col-md-4">
            <img src={src} className="white mx-auto w-25 d-block pt-5 pb-2" />
            <h5 className="text-center font-weight-bold text-white">{link}</h5>
            <p className="w-50 mx-auto text-white text-center pb-5">{children}</p>
            <style jsx>{`

            `}</style>
        </div>
    )
}
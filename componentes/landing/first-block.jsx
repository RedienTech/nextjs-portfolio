import React from 'react';
import { Animation } from './images';
import { Presentation } from './texts';
import Typed from 'react-typed'

export default function FirstBlock() {
    return (
        <div className="mx-auto" style={{ width: "80%" }}>
            <div className="row align-middle py-5">
                <div className="col-md-6 col-sm-12 my-auto d-none d-md-block">
                    <h1 className="font-weight-bold" style={{ color: "#006bb3", fontSize: "3em" }}> <Typed strings={["Hola Mundo!", "Soy Neider", "Permiteme Presentarme"]} typeSpeed={70} loop={false} backSpeed={50} /> </h1>
                </div>
                <div className="col-md-6 col-sm-12 my-auto text-center d-md-none pb-4">
                    <h1 className="font-weight-bold" style={{ color: "#006bb3", fontSize: "3em" }}> <Typed strings={["Hola mundo", "Soy Neider"]} typeSpeed={70} loop={false} backSpeed={50} /> </h1>
                </div>
                <div className="col-md-6 col-sm-12 ml-auto my-auto">
                    <Animation />
                </div>
            </div>
        </div>
    )
}
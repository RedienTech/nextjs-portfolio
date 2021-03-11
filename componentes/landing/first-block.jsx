import React from 'react';
import { Animation } from './images';
import { Presentation } from './texts';
import Typed from 'react-typed'

export default function FirstBlock() {
    return (
        <div className="mx-auto" style={{ width: "80%" }}>
            <div className="row align-middle py-5">
                <div className="col-md-6 col-sm-12 my-auto">
                    <h1 className="font-weight-bold" style={{ color: "#006bb3", fontSize: "70px" }}> <Typed strings={["Hello World", "I'm Neider", "Please, let me talk you about me!"]} typeSpeed={70} loop={false} backSpeed={50} /> </h1>
                </div>
                <div className="col-md-6 col-sm-12 ml-auto">
                    <Animation />
                </div>
            </div>
        </div>
    )
}
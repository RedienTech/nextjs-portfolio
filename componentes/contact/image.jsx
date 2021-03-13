import React from 'react'
import FormEmail from './form'

export default function ImageEmail(){
    return (
        <div className="mx-auto" style={{ width: "80%" }} data-aos="fade-up">
            <div className="row align-middle py-5">
                <div className="col-md-6 col-sm-12 my-auto">
                    <img src="/email.svg" alt="Ilustracion de Un Correo Electronico"/>
                </div>
                <div className="col-md-6 col-sm-12 ml-auto">
                    <FormEmail />
                </div>
            </div>
        </div>
    )
}
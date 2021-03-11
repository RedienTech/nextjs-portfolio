import React from 'react'
import { Carrer } from './texts'

export default function FourthBlock() {
    return (
        <div className="row pt-5 mx-auto forty" data-aos="fade-down">
            <Carrer title="Frontend Developer" src="/frontend.svg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum, earum adipisicing elit. Itaque dolorum, earum adip
            </Carrer>

            <Carrer title="Backend Developer" src="/backend.svg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum, earum adipisicing elit. Itaque dolorum, earum adip
            </Carrer>
            

            <Carrer title="Data Scientist" src="/data.svg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum, earum adipisicing elit. Itaque dolorum, earum adip
            </Carrer>
            <style jsx>{`
            .know-title {
                color: #006bb3;
                font-weight: bold;
            }

            .descripcion {
                color: #006bb3;
                width: 90%;
                font-weight: light;
            }

            .forty {
                width: 93%
            }
        `}</style>
        </div>
    )
}
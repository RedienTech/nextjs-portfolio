import React from 'react';
import { motion } from 'framer-motion'

export function Presentation() {
    return (
        <React.Fragment>
            <p className="content animate__animated animate__bounceInUp">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, aut. Officiis veniam animi enim illum distinctio omnis architecto suscipit quibusdam recusandae reprehenderit. Est pariatur facere distinctio unde excepturi corporis illum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vel cum commodi enim, pariatur quo sapiente beatae nihil suscipit officia dignissimos libero perferendis totam labore corporis soluta ut. Nihil, explicabo.
            </p>
            <style jsx>{`
                .content {
                    font-size: 18px;
                }
            `}</style>
        </React.Fragment>
    )
}

export function Carrer({ title, src, children }) {
    return (
        <React.Fragment>
            <div className="col-md-4 sm-12 text-center border-left border-right">
                <motion.img
                    className="py-3" 
                    style={{width: "20%"}}
                    src={src}
                    alt="Frontend sign"
                    whileHover={{scale: 1.1, cursor: 'pointer', y:-20}}>
                </motion.img>
                <h5 className="know-title" >{title}</h5>
                <p className="descripcion text-center mx-auto">{children}
                </p>
            </div>
            <style jsx>{`
                .image{
                    width: 90%
                }

                .know-title {
                    color: #006bb3;
                    font-weight: bold;
                }
    
                .descripcion {
                    color: #000;
                    width: 90%;
                    font-weight: light;
                }
            `}</style>
        </React.Fragment>
    )
}
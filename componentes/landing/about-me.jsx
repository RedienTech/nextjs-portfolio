import React, { useEffect } from 'react';

export default function AboutMe() {

    return (
        <React.Fragment>
        <div className="row networks shadow-sm" id="about-me">
            <div className="col-md-12 pt-4" >
                <div data-aos="fade-up" className="row mx-auto cont" style={{ width: "100%" }}>
                    <h3 className="text-center title text-white mx-auto font-weight-bold col-md-12">
                        ¿Quien Soy?
                    </h3>
                    <p className="text-center mx-auto pt-1 typo">Nací en Chinú, Colombia. Actualmente soy un programador junior en busca de hacer crecer mi vida profesional. Desde muy joven la tecnología ha sido una parte fundamental de mi vida, y siempre fue mi deseo entender cómo funcionaba todo aquello que me hacía tan feliz. Desde que inicie este viaje mi gran sueño siempre ha sido trabajar rodeado de personas talentosas de las cuales pueda aprender, y poder dar uso a todas mis habilidades con el fin de impulsar ideas y proyectos. Tengo una gran facilidad para aprender cosas nuevas y el trabajo duro ha sido la clave para poder ser lo que hoy en día soy.</p>
                </div>
            </div>

            <style jsx>{`

                .cont {
                    padding: 10%;
                }

                .title {
                    font-size: 2.5rem;
                }

                .typo {
                    font-size: 1.25rem;
                    color: #fff;
                }

                .container {
                    width:90%
                }

                .networks {
                    background-color: #09f;
                    padding-bottom: 6em;
                }
            `}</style>
        </div>
    </React.Fragment>
    )
}
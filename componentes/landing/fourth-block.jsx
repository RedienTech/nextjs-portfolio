import React from 'react'
import { Carrer } from './texts'

export default function FourthBlock() {
    return (
        <div className="row pt-5 mx-auto forty" data-aos="fade-down">
            <Carrer title="Frontend Developer" src="/frontend.svg" alt="Imagen de Frontend">
            Dominio de Ajax, SPA y desarrollo de páginas con Responsive Design. Manejo distintas librerías de frontend, entre ellas Angular, React, y Svelte. Soy un apasionado del internet y amo aportar a que sea cada vez más grande
            </Carrer>

            <Carrer title="Backend Developer" src="/backend.svg" alt="Imagen de Frontend">
            Creación de servidores backend utilizando distintas herramientas como Node Js, PHP o Django. Domino el uso de distintas bases de datos tanto relacionales como no relacionales, entre ellas mongoDB, MySQL y SQLite 
            </Carrer>
            

            <Carrer title="Data Scientist" src="/data.svg" alt="Imagen de Frontend">
            La estadística es mi rama favorita de las matemáticas, tengo facilidad obteniendo información útil de los grandes conjuntos de datos y domino distintas librerías dentro de lenguajes como Python y R, siendo el primero mi especialidad
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
import React from "react";
import Proyect from "./proyect";

export default function Mosaico() {
  return (
    <React.Fragment>
      <div className="mx-auto" style={{ width: "80%" }} data-aos="fade-up">
        <div className="row align-middle py-4">
          <div className="col-md-12 text-center">
            <h3 className="font-weight-bold title pb-4">
              Da Un Vistazo A Algunos De Mis Proyectos
            </h3>
            <p className="font-weight-lighter pb-4">Estos son algunos de los proyectos que he emprendido con el objetivo de fortalecer mis habilidades como programador, espero que alguno de ellos sea de tu agrado</p>
            <div className="row mx-auto">
                <Proyect src="/work/pictor.svg" title="Pictor Flask">Una aplicacion entera para compartir imagenes, desarrollada usando la libreria Flask de Python (Login, registro, subida, descarga, edicion de imagenes y motor de busqueda)</Proyect>
                <Proyect src="/work/social-network.svg" title="Artisans PHP">Una red social desarrolada en PHP y MySql en 4 horas desde cero. Incluye login, registro, publicaciones, comentarios, mensajes, amistades y sistema de likes</Proyect>
                <Proyect  src="/work/regresion.svg" title="Regresion Lineal Multiple">El desarrollo de una Regresion Lineal multiple usando ecuacion normal y descenso del gradiente, todo desde cero y sobre una base de datos basada en precios de casas en la ciudad de Boston</Proyect>
                <Proyect src="/work/api.svg" title="REST Api">Una API construida desde cero para una red social usando como base de datos mongoDB y construida con Express JS y GraphQL, implementa un sistema de login por transferencia de tokens.</Proyect>
                <Proyect src="/work/portafolio.svg" title="Portafolio Web">Un portafolio web creado desde cero con NEXT JS, aplicacion de SEO y SSR. Desplegado a traves de Vercel y mantenido en repositorio de GitHub. Tiene atencion a la accesibilidad y Responsive Design</Proyect>
                <Proyect src="/work/neural.svg" title="Red Neuronal">La implementacion de una red neuronal desde cero, capaz de separar conjuntos de datos irregulares y realizada sin utilizar ninguna libreria de Machine Learning. Aplicando metodo de descenso del gradiente</Proyect>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
                .title {
                    color: #006bb3;
                }
            `}</style>
    </React.Fragment>
  );
}

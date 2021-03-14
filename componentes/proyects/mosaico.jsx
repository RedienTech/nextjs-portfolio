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
            <p className="font-weight-lighter pb-4">
              Estos son algunos de los proyectos que he emprendido con el
              Objetivo de fortalecer mis habilidades como programador, espero
              Que alguno de ellos sea de tu agrado

            </p>
            <div className="row mx-auto">
              <Proyect 
                src="/work/pictor.svg" 
                title="Pictor Flask"
                link="https://github.com/RedienTech/flask-pictor"
              >
                Una aplicación entera para compartir imágenes, desarrollada usando la librería Flask de Python (Login, registro, subida, descarga, edición de imágenes y motor de búsqueda)
              </Proyect>
              <Proyect 
                src="/work/social-network.svg" 
                title="Artisans PHP"
                link="https://github.com/RedienTech/artisans-php"
                >
                Una red social desarrollada en PHP y MySql en 4 horas desde cero. Incluye login, registro, publicaciones, comentarios, mensajes, amistades y sistema de likes.
              </Proyect>
              <Proyect
                src="/work/regresion.svg"
                title="Regresion Lineal Multiple"
                link ="https://github.com/RedienTech/Regresion-Lineal-Multiple"
              >
                El desarrollo de una Regresión Lineal múltiple usando ecuación normal y descenso del gradiente, todo desde cero y sobre una base de datos basada en precios de casas en la ciudad de Boston
              </Proyect>
              <Proyect 
                src="/work/api.svg" 
                title="REST Api"
                link="https://github.com/RedienTech/artisans-rest-api"
              >
                Una API construida desde cero para una red social usando como
                base de datos mongoDB y construida con Express JS y GraphQL,
                implementa un sistema de login por transferencia de tokens.
              </Proyect>
              <Proyect
                src="/work/portafolio.svg" 
                title="Portafolio Web" 
                link="https://github.com/RedienTech/nextjs-portfolio"
              >
                Un portafolio web creado desde cero con NEXT JS, aplicación de SEO y SSR. Desplegado a través de Vercel y mantenido en repositorio de GitHub. Tiene atención a la accesibilidad y Responsive Design
              </Proyect>
              <Proyect 
                src="/work/neural.svg" 
                title="Red Neuronal"
                link="https://colab.research.google.com/drive/1RnLoaNvoGcTFhZZRVpzPpRWsVcz5FV1F"
              >
                La implementación de una red neuronal desde cero, capaz de separar conjuntos de datos irregulares, desarrollada sin utilizar ninguna librería de Machine Learning. Aplicando método de descenso del gradiente
              </Proyect>
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

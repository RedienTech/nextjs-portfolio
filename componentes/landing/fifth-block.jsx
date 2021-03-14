import Link from "next/link";
import React from "react";

export default function FifthBlock() {
  return (
    <React.Fragment>
      <div className="row mx-auto bloque">
        <div className="col-md-12 mx-auto">
          <h3
            className="more font-weight-bold text-center mx-auto col-md-12"
            data-aos="fade-up"
          >
            ¿Quieres Saber Mas Sobre Mi?
          </h3>
          <p className="text-center mx-auto contact" data-aos="fade-up">
          Tengo varios proyectos que he emprendido para martirizarme en el uso de las distintas tecnologías, puedes verlos en el enlace de abajo o directamente en mi cuenta de GitHub. O si quieres un resumen de mis habilidades puedes acceder a mi Curriculum Vitae.
          </p>
        </div>
      </div>
      <div className="row mx-auto cont">
        <div className="col-sm-6">
          <div className="col-sm-6 ml-auto pb-4">
            <Link href="/proyects">
              <a
                className="mx-auto nav-link boton text-center"
                data-aos="fade-up"
              >
                Mis Proyectos
              </a>
            </Link>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="col-sm-6 mr-auto pb-4">
            <a
              target="_blank"
              className="mx-auto nav-link boton text-center"
              data-aos="fade-up"
              href="https://drive.google.com/file/d/11to19afxKwjMCmMbTyFY5ZkssFDR-5jK/view?usp=sharing"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bloque {
          padding-top: 6em;
        }

        .cont {
          padding-bottom: 6em;
        }

        .boton {
          border: solid 2px #09f;
          padding: 4px 4px !important;

          border-radius: 3em;
          color: #09f;
        }

        .boton:hover {
          cursor: pointer;
          background-color: #09f;
          color: #fff;
        }

        .contact {
          width: 93%;
        }

        .more {
          color: #006bb3;
        }
      `}</style>
    </React.Fragment>
  );
}

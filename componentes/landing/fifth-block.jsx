import React from "react";

export default function FifthBlock() {
  return (
    <React.Fragment>
      <div className="row mx-auto bloque">
        <div className="col-md-12 mx-auto">
          <h3 className="more font-weight-bold text-center mx-auto col-md-12" data-aos="fade-up">
            ¿Do you want to know more about me?
          </h3>
          <p className="text-center mx-auto contact" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            harum enim quam, officiis dolore neque reiciendis itaque optio
            voluptatum. Minus labore mollitia blanditiis, similique sint quidem
            dolor? Deserunt, labore adipisci.
          </p>
        </div>
      </div>
      <div className="row mx-auto cont">
        <div className="col-sm-6">
        <div className="col-sm-6 ml-auto pb-4">
            <a className="mx-auto nav-link boton text-center" data-aos="fade-up">See My Work</a>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="col-sm-6 mr-auto pb-4">
            <a className="mx-auto nav-link boton text-center" data-aos="fade-up">Descargar CV</a>
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

import React from "react";
import { Helmet } from "react-helmet";
import Mosaico from "../componentes/proyects/mosaico";

export default function Proyects() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Redien | Proyects</title>
        <html lang="es"></html>
        <meta
          name="description"
          content="Revision de Proyectos de aprendizaje"
        />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Mosaico />
    </React.Fragment>
  );
}

import React from "react";
import ImageEmail from "../componentes/contact/image";
import { Helmet } from "react-helmet";
import Head from "next/head";

export default function Contact() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Redien | Contact</title>
        <html lang="es"></html>
        <meta name="description" content="Pagina de contacto, Enviar Correo, Agendar Llamada" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <ImageEmail />
    </React.Fragment>
  );
}

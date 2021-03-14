import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md cont mx-auto">
      <Link href="/">
        <motion.img
          src="/nuevo-logo.svg"
          className="img-fluid logo"
          style={{ width: "100px" }}
          alt="Logo de Redien"
          whileHover={{
            boxShadow: "0px 0px 8px rgb(0, 0, 0)",
            cursor: "pointer",
          }}
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          <img className="icon" src="/icon.svg" />
        </span>
      </button>
      <div className="collapse navbar-collapse ml-auto" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link href="/#about-me">
          <a className="nav-link boton-sobremi pr-3" >
            Sobre mi!!
          </a></Link>
          <Link href="/contact" >
            <button className="nav-link boton-contactar mr-auto">Contactar</button>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .cont {
          width: 83%;
        }

        .boton-contactar {
          width: 48.5%;
          background-color: #fff;
          border: solid 2px #09f;
          border-radius: 2em;
          color: #09f;
        }

        .boton-contactar:hover {
          cursor: pointer;
          background-color: #09f;
          color: #fff;
        }

        .boton-sobremi {
          color: #000;
        }

        .boton-sobremi:hover {
          color: #09f;
          cursor: pointer;
        }
      `}</style>
    </nav>
  );
}

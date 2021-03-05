import React from 'react';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg cont mx-auto">
            <a className="navbar-brand font-weight-bold" href="#">Redien</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><img className="icon" src="/icon.svg"/></span>
                </button>
                <div className="collapse navbar-collapse ml-auto" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-link boton-sobremi">Sobre mi!!</a>
                        <a className="nav-link boton-contactar">Contactar</a>
                    </div>
                </div>
            <style jsx>{`
                .cont {
                    width: 82%
                }

                .navbar-brand{
                    color: #000;
                }

                .boton-contactar {
                    margin-left: 20px;
                    border: solid 2px #09f;
                    border-radius: 3em;
                    color: #09f;
                }
                
                .boton-contactar:hover {
                    cursor: pointer;
                    background-color: #09f;
                    color: #fff;
                }
                
                .boton-sobremi{
                  color: #000;  
                }

                .boton-sobremi:hover {
                    color: #09f;
                    cursor: pointer;
                }

            `}</style>
        </nav>
    )
}

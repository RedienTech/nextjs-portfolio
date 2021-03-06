import React from "react";

export default function Proyect({ src, title, children, link }) {
  return (
    <div className="col-md-4 pb-5">
      <div className="card">
        <div className="card-body">
          <div className="mx-auto">
            <div className="col-md-6 mx-auto pb-2">
              <img src={src} className="img-fluid mx-auto" alt={title} />
            </div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{children}</p>
            <a href={link} target="_blank" className="btn btn-primary enlace mt-auto">
              Visitar
            </a>
          </div>
        </div>
        <style jsx>{`
          .card-title {
              color: #006bb3;
          }
          .card {
            height: 100%;
          }
        `}</style>
      </div>
    </div>
  );
}

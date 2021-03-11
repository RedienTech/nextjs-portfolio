import React from "react";
import { ImageNet } from "../landing/images";

export default function Footer() {
  return (
    <React.Fragment>
      <div className="row networks shadow-sm">
        <div className="super col-md-12 text-white">
          <div className="row">
            <div className="col-md-4 align-middle">
              <h3 className="mx-auto text-center font-weight-bold mt-3">
                Let's Talk
              </h3>
            </div>
            <div className="col-md-4">
              <p className="text-center font-weight-regular align-middle">
                If you want to work with me, please send me a message in the
                following link
              </p>
            </div>
            <div className="text-center col-md-4 mt-3">
              <a className=" btn mx-auto align-middle">Contactar</a>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row mx-auto" style={{ width: "90%" }}>
            <ImageNet src="github.svg" link="@redientech"></ImageNet>
            <ImageNet src="facebook.svg" link="neider.arroyo"></ImageNet>
            <ImageNet src="linkedin.svg" link="@neiderarroyo"></ImageNet>
          </div>
          <div className="row">
            <span className="text-center text-white mx-auto pb-3">WebSite Developed By @Redien</span>
          </div>
        </div>

        <style jsx>{`
          .super {
            align-items: center;
            background: #006bb3;
            border-radius: 12px;
            box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #141c3a;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            margin: 0 auto;
            margin-top: -5rem;
            padding: 3.5rem 1.25rem;
            max-width: 60rem;
            width: 90%;
          }

          .btn {
            border: solid 2px #fff;
            border-radius: 3em;
            color: #fff;
            margin-top: auto;
          }

          .btn:hover {
            cursor: pointer;
            background-color: #00233b;
            color: #fff;
          }

          .container {
            width: 90%;
          }

          .networks {
            margin-top: 6em;
            background-color: #00233b;
          }
        `}</style>
      </div>
    </React.Fragment>
  );
}

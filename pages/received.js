import React from "react";

export default function Received() {
  return (
    <React.Fragment>
      <div className="mx-auto" style={{ width: "80%" }} data-aos="fade-up">
        <div className="row py-5">
          <div className="col-md-12 text-center pb-4">
            <h3 className="mx-auto sended font-weight-bold text-center">
              Message Succesfully Sended!!
            </h3>
          </div>
          <div className="col-md-8 mx-auto">
              <img src="/received.svg" className="img-fluid" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .sended {
            color: #006bb3;
        }
      `}</style>
    </React.Fragment>
  );
}

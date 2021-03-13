import React, {useState} from "react";
import { useFormik } from "formik";
import {useRouter} from "next/router"
import emailjs from "emailjs-com";

const validate = (values) => {

  const errors = {};
  if (!values.email) {
    errors.email = "Email Required";
  }
  if (!values.name) {
    errors.name = "Name Required";
  }
  if (!values.message) {
    errors.message = "Message Required";
  }
  return errors;
};

export default function FormEmail() {

const router = useRouter()

const [load, setLoad] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    onSubmit: (values) => {
      setLoad(true)
      emailjs.send("service_whnzjgj","template_flgih6j",{
        to_name: "Neider",
        from_name: values.name,
        message: values.message,
        reply_to: values.email,
        }).then (res => {
          if (res.status === 200){
            setLoad(false)
            router.push("/received")
          } else {
            setLoad(false)
            alert("Ha ocurrido un error en el envio del Email")
          }
        })
    },
    validate
  });

  return (
    <React.Fragment>
      <h3 className="text-center mx-auto font-weight-bold title pb-2">
        Enviame un Email!!
      </h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-md-6 form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
            />
            {formik.touched.name && formik.errors.name ? (
              <span className="small error">{formik.errors.name}</span>
            ) : null}
          </div>
          <div className="col-md-6 form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="small error">{formik.errors.email}</span>
            ) : null}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              className="form-control"
              id="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              rows="6"
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <span className="small error">{formik.errors.message}</span>
            ) : null}
          </div>
        </div>
        <div className="row text-center">
          {load ? <div className="spinner mx-auto"> </div> : <button type="submit" className="mx-auto btn ">Enviar</button>}
        </div>
      </form>
      <style jsx>{`
        .spinner {
          border: 4px solid rgba(0, 0, 0, .1);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border-left-color: #09f;

          animation: spin 1s ease infinite
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100%{
            transform: rotate(360deg)
          }
        }

        .error {
          color: red;
        }

        .title {
          color: #006bb3;
        }
        .btn {
          border: solid 2px #09f;
          border-radius: 3em;
          color: #09f;
          margin-top: auto;
        }

        .btn:hover {
          cursor: pointer;
          background-color: #09f;
          color: #fff;
          padding-left: 2rem;
          padding-right: 2rem;
        }
      `}</style>
    </React.Fragment>
  );
}

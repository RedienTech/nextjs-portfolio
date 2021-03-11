import React from "react";
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

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    onSubmit: (values) => {
      router.push("/received")
    },
    validate
  });

  return (
    <React.Fragment>
      <h3 className="text-center mx-auto font-weight-bold title pb-2">
        Send me an Email!!
      </h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-md-6 form-group">
            <label htmlFor="nombre">Name</label>
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
            <label htmlFor="message">Message</label>
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
          <button type="submit" className="mx-auto btn">
            Enviar
          </button>
        </div>
      </form>
      <style jsx>{`
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

import React, { useState } from "react";
import { Formik } from "formik";

import * as Yup from "yup";
import Classes from "./billingDetails.css";
const ContactFrom = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", name: "", phone: "", address: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          // axios
          //   .post("http://localhost:3000/customer/Login", values)
          //   .then((res) => {
          //     localStorage.setItem("userEmail", values.email);
          //     localStorage.setItem("userId", res.data.userId);
          //     window.location.reload();
          //     console.log(res);
          //   })
          //   .catch((error) => {
          //     setMessage(error.response.data.error.message);
          //     console.log("is iam getting error in my code", error.response);
          //     console.log(error.message);
          //   });
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required("Email  Required"),
          name: Yup.string().required("no name provided"),
          phone: Yup.string().required("no phone provided"),
          address: Yup.string().required("no address provided"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <form autoComplete="off" onSubmit={handleSubmit}>
              <label htmlFor="name">Billing Details</label>
              
              <label htmlFor="name">Name</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  Classes.myinput && errors.name && touched.name && "error"
                }
                type="text"
                name="name"
                placeholder="enter your Name"
              />
              {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}
              <label htmlFor="email">Email</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email && "error"}
                type="text"
                name="email"
                placeholder="enter your email"
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
              <label htmlFor="email">Phone number</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.phone && errors.phone && "error"}
                type="number"
                name="phone"
                placeholder="enter your phone"
              />
              {errors.phone && touched.phone && (
                <div className="input-feedback">{errors.review}</div>
              )}

              <label htmlFor="address">address</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.address && touched.address && "error"}
                type="text"
                name="address"
                placeholder="enter your address"
              />
              {errors.address && touched.address && (
                <div className="input-feedback">{errors.address}</div>
              )}

              
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ContactFrom;

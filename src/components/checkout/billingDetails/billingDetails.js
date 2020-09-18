import React, { useState } from "react";
import { Formik } from "formik";

import * as Yup from "yup";
import Classes from "./billingDetails.css";
import MyInput from "../../formElements/formElements";

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
              <MyInput
                label="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
              <MyInput
                label="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
              />

              <MyInput
                label="Phone"
                name="phone"
                type="number"
                placeholder="Enter your phone number"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
              <MyInput
                label=" Address"
                name="address"
                type="text"
                placeholder="Enter your address"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ContactFrom;

// refactor
// ui changes
//formik distrubution

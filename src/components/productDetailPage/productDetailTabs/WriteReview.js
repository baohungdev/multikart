import React, { useState } from "react";
import { Formik } from "formik";
import StarRatings from "react-star-ratings";
import * as Yup from "yup";
import MyInput from "../../formElements/formElements";
const ContactFrom = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", name: "", review: "", testimonial: "" }}
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
          review: Yup.string().required("no review provided"),
          testimonial: Yup.string().required("no testimony provided"),
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
              <label htmlFor="name">Rating</label>
              <StarRatings
                rating={3.5}
                starDimension="18px"
                starSpacing="8px"
                starRatedColor="orange"
              />
              <MyInput
                label="Name"
                name="name"
                type="text"
                placeholder="Enter your name"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
              <MyInput
                label="Email"
                name="email"
                type="text"
                placeholder="Enter your email address"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
              />

              <MyInput
                label="Review Title"
                name="review"
                type="text"
                placeholder="Enter your reviews "
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
              <MyInput
                label="Testimonial"
                name="testimonial"
                type="text"
                placeholder="Enter your testimonial "
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
              />

              <button type="submit" disabled={isSubmitting}>
                Submit Your Review
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ContactFrom;

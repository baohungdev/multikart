import React, { useState } from "react";
import { Formik } from "formik";
import StarRatings from "react-star-ratings";
import * as Yup from "yup";
import Classes from "./WriteReview.css";
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
              <label htmlFor="email">Review Title</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.review && touched.review && "error"}
                type="text"
                name="review"
                placeholder="enter your review"
              />
              {errors.review && touched.review && (
                <div className="input-feedback">{errors.review}</div>
              )}

              <label htmlFor="email">Write Testimonial</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.testimonial && touched.testimonial && "error"}
                type="text"
                name="testimonial"
                placeholder="enter your email"
              />
              {errors.testimonial && touched.testimonial && (
                <div className="input-feedback">{errors.testimonial}</div>
              )}

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

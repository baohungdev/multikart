import React from "react";
import "../checkout/billingDetails/billingDetails.css";

const MyInput = ({ label, ...props }) => {
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input
        className={
          props.errors[props.name] && props.touched[props.name] && "error"
        }
        {...props}
      />
      {props.touched[props.name] && props.errors[props.name] ? (
        <div className="input-feedback">{props.errors[props.name]}</div>
      ) : null}
    </>
  );
};

export default MyInput;

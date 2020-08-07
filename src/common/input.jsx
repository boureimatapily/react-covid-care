import React from "react";

/**
 * @author
 * @function Input
 **/

const Input = ({ name, label, value, error }, onChange) => {
  return (
    <div className="form-group col-md-6 mb-3">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        value={value}
        onChange={onChange}
        type="text"
        id={name}
        name={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger"> {error} </div>}
    </div>
  );
};

export default Input;

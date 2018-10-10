import React from "react";

export default ({ value, handleChange, label, id, name }) => (
  <React.Fragment>
    <label htmlFor={id}>{label}</label>
    <input
      type="text"
      value={value}
      onChange={handleChange}
      name={name}
      id={id}
    />
  </React.Fragment>
);

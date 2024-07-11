import React from "react";

const InputField = ({ label, type, name, value, onChange, required }) => {
  return (
    <div className="form-group">
      <label>{label}:</label>
      <input
        className="form-control"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;

import React from "react";
import "./styles.css";
const Button = ({ type, text, onClick }) => {
  return (
    <button
      type={type}
      className="btn btn-primary btn-block mt-3 backgroudBtn"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

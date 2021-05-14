import React from "react";
import "./Input.css";
function Input(props) {
  return (
    <button className="button" onClick={props.click} value={props.value}>
      {props.value}
    </button>
  );
}

export default Input;

import React from "react";
import "./Caluclator.css";
import Input from "./Input";
import Output from "./Output";
function Caluclator() {
  return (
    <div className="container">
      This is Caluclator
      <div className="output-container">
        <Output />
      </div>
      <div className="input">
        <Input />
      </div>
    </div>
  );
}

export default Caluclator;

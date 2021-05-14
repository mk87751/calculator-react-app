import React from "react";
import "./Output.css";
function Output(props) {
  return <input className="output" defaultValue={props.value} />;
}

export default Output;

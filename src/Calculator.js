import React, { useState } from "react";
import "./Calculator.css";
import Input from "./Input";
import Output from "./Output";
let first = "";
let second = "";
let operand = "";
function Caluclator() {
  const [state, setState] = useState("");
  //   oper1: "",
  //   operand: "",
  //   oper2: "",
  //   oper: "",
  // });

  //Performing operatin on Event click

  const onClickNumber = (event) => {
    if (operand === "") {
      first += event.target.value;
    } else {
      second += event.target.value;
    }
    console.log(first, " ", second);
    setState(first + operand + second);
  };

  const onClickOperand = (event) => {
    console.log("first:", first, "operand:", operand, "second:", second);
    if (first !== "" && second !== "") {
      switch (operand) {
        case "+":
          first = Number(first) + Number(second);
          break;
        case "-":
          first = first - second;
          break;
        case "X":
          first = first * second;
          break;
        case "/":
          first = first / second;
          break;
        default:
          break;
      }
      operand = "";
      second = "";
    }
    operand = event.target.value;
    console.log("first:", first, "operand:", operand, "second:", second);
    setState(first + operand + second);
    // setState({
    //   oper1: state.oper1 !== "" && state.oper2 !== "" ? sum : state.oper,
    //   operand: event.target.value,
    //   oper: state.oper + event.target.value,
    // });
  };

  const onClickEqualsHandler = () => {
    if (first !== "" && second !== "") {
      switch (operand) {
        case "+":
          first = Number(first) + Number(second);
          break;
        case "-":
          first = first - second;
          break;
        case "X":
          first = first * second;
          break;
        case "/":
          first = first / second;
          break;
        default:
          break;
      }
    }
    console.log(first, second);
    operand = "";
    second = "";
    setState(first);
    // setState({
    //   oper1: "",
    //   oper2: "",
    //   operand: "",
    //   oper: sum,
    // });
  };

  const onClickDotHandler = () => {
    if (operand === "") {
      first += ".";
    } else {
      second += ".";
    }
    setState(first + operand + second);
  };

  const onClickSignChangeHandler = () => {
    if (operand === "") {
      first = Number(first) >= 0 ? "-" + first : Number(first) * -1;
    } else if (second !== "") {
      second = Number(second) >= 0 ? "-" + second : Number(second) * -1;
    }
    setState(first + operand + second);
  };

  const onClickRemoverHandler = (event) => {
    if (event.target.value === "Del") {
      if (second !== "") {
        second = Math.floor(Number(second) / 10);
        second = second === 0 ? "" : second;
      } else if (operand !== "") {
        operand = "";
      } else {
        first = Math.floor(Number(first) / 10);
        first = first === 0 ? "" : first;
      }
    } else if (event.target.value === "C") {
      if (second !== "") {
        second = "";
      } else if (operand !== "") {
        operand = "";
      } else {
        first = "";
      }
    } else {
      first = second = operand = "";
    }
    setState(first + operand + second);
  };

  //rendering all the respective buttons

  //rendering AC, C, Del buttons
  const renderButtonRemovers = (i) => {
    return <Input value={i} click={(event) => onClickRemoverHandler(event)} />;
  };

  //rendering +/- button
  const renderButtonSignChanger = (i) => {
    return <Input value={i} click={() => onClickSignChangeHandler()} />;
  };

  //renderingn all number button
  const renderButtonNumbers = (i) => {
    return <Input value={i} click={(event) => onClickNumber(event)} />;
  };

  //rendering + - * / buttons
  const renderButtonOperands = (i) => {
    return <Input value={i} click={(event) => onClickOperand(event)} />;
  };

  //rendering dot button
  const renderButtonDot = (i) => {
    return <Input value={i} click={(event) => onClickDotHandler()} />;
  };

  //rendering = or Ans button
  const renderButtonEquals = (i) => {
    return <Input value={i} click={() => onClickEqualsHandler()} />;
  };

  return (
    <div className="container">
      <h2 style={{ height: "5%" }}>Calculator</h2>
      <div className="output-container">
        <Output value={state} />
      </div>
      <div className="input">
        <div>
          {renderButtonRemovers("AC")}
          {renderButtonRemovers("C")}
          {renderButtonRemovers("Del")}
          {renderButtonSignChanger("+/-")}
        </div>
        <div>
          {renderButtonNumbers(7)}
          {renderButtonNumbers(8)}
          {renderButtonNumbers(9)}
          {renderButtonOperands("/")}
        </div>
        <div>
          {renderButtonNumbers(4)}
          {renderButtonNumbers(5)}
          {renderButtonNumbers(6)}
          {renderButtonOperands("X")}
        </div>
        <div>
          {renderButtonNumbers(1)}
          {renderButtonNumbers(2)}
          {renderButtonNumbers(3)}
          {renderButtonOperands("-")}
        </div>
        <div>
          {renderButtonDot(".")}
          {renderButtonNumbers(0)}
          {renderButtonEquals("=")}
          {renderButtonOperands("+")}
        </div>
      </div>
    </div>
  );
}

export default Caluclator;

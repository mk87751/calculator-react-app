import React from "react";
import "./Input.css";
function Input() {
  return (
    <div>
      <div>
        <button class="button">AC</button>
        <button class="button">C</button>
        <button class="button">Del</button>
        <button class="button">+/-</button>
      </div>
      <div>
        <button class="button">7</button>
        <button class="button">8</button>
        <button class="button">9</button>
        <button class="button">/</button>
      </div>
      <div>
        <button class="button">4</button>
        <button class="button">5</button>
        <button class="button">6</button>
        <button class="button">X</button>
      </div>
      <div>
        <button class="button">1</button>
        <button class="button">2</button>
        <button class="button">3</button>
        <button class="button">-</button>
      </div>
      <div>
        <button class="button">0</button>
        <button class="button">.</button>
        <button class="button">=</button>
        <button class="button">+</button>
      </div>
    </div>
  );
}

export default Input;

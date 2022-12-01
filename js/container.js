import { addition } from "./minimum.js";

// import * as minimum from "./minimum.js";
// import * as normal from "./normal.js";
// import * as maximum from "./maximum.js";

// let firstNumber = document.querySelector("#first-number").value;
// let secondNumber = document.querySelector("#second-number").value;
document
  .querySelector(".addition")
  .addEventListener("change", addition(0.1, 0.2));

alert(addition.resultNumber);
// document.querySelector("#result").innerHTML = `<p>Your change is dollars.</p>`;

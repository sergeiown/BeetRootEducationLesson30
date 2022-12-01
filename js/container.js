import * as minimum from "./minimum.js";
// import * as normal from "./normal.js";
// import * as maximum from "./maximum.js";

let additionTask = () => {
  let firstNumber = Number(document.querySelector("#first-number").value);
  let secondNumber = Number(document.querySelector("#second-number").value);

  document.querySelector("#result").innerHTML = `<span>${minimum.addition(
    firstNumber,
    secondNumber
  )}</span>`;
};

document.querySelector(".addition").addEventListener("change", additionTask);

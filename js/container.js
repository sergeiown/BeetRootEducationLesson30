import * as minimum from "./minimum.js";
import * as normal from "./normal.js";
import * as maximum from "./maximum.js";

// addition
const additionTask = () => {
  const firstNumber = Number(document.querySelector(".first-number").value);
  const secondNumber = Number(document.querySelector(".second-number").value);

  document.querySelector(
    ".addition-result"
  ).innerHTML = `<span>${minimum.addition(firstNumber, secondNumber)}</span>`;
};

// reversed number
const reversalTask = () => {
  const userNumber = Number(document.querySelector(".user-number").value);

  document.querySelector(
    ".reversal-result"
  ).innerHTML = `<span>${normal.reversedNumber(userNumber)}</span>`;
};

// number of chocolates
const chocolatesTask = () => {
  const amount = Number(document.querySelector(".amount").value);
  const price = Number(document.querySelector(".price").value);

  document.querySelector(".quantity-result").innerHTML = `<span>${
    normal.numberOfChocolates(amount, price).chocolateQuantity
  } pcs.</span>`;

  document.querySelector(".rest-result").innerHTML = `<span>${
    normal.numberOfChocolates(amount, price).restAmount
  } USD</span>`;
};

// income calculator
const incomeCalc = () => {
  const depositTerm = Number(document.querySelector(".deposit-term").value);
  const clientAmount = Number(document.querySelector(".deposit-amount").value);

  document.querySelector(
    ".income-result"
  ).innerHTML = `<span> for ${depositTerm} months is ${maximum.calculateIncome(
    depositTerm,
    clientAmount
  )}</span>`;
};

// expressions result
const expressionResultInfo = () => {
  document.querySelector(".first-result").innerHTML = `<span> result is ${
    maximum.expressionResult().first
  }</span>`;

  document.querySelector(".second-result").innerHTML = `<span> result is ${
    maximum.expressionResult().second
  }</span>`;

  document.querySelector(".third-result").innerHTML = `<span> result is ${
    maximum.expressionResult().third
  }</span>`;
};

// events listeners
document.querySelector(".addition").addEventListener("change", additionTask);

document
  .querySelector(".reversed-number")
  .addEventListener("change", reversalTask);

document.querySelector(".chocolate").addEventListener("change", chocolatesTask);

document
  .querySelector(".income-calculator")
  .addEventListener("change", incomeCalc);

document
  .querySelector(".expression")
  .addEventListener("click", expressionResultInfo);

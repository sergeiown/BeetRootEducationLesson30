let addition = (firstNumber, secondNumber) => {
  const invalidNumber = "one of the values entered is not a valid number.";

  if (firstNumber > 0 && secondNumber > 0) {
    const resultNumber = (firstNumber + secondNumber).toFixed(1);

    return resultNumber;
  } else {
    return invalidNumber;
  }
};

//The following task is not informative enough to build the function:
// let first = "1";
// let second = 2;
// let result = Number(first) + Number(second);
// console.log(result);

export { addition };

let addition = (firstNumber, secondNumber) => {
  const invalidNumber =
    "not calculated because one of the values is not a valid number.";

  if (firstNumber > 0 && secondNumber > 0) {
    const resultNumber = (firstNumber + secondNumber).toFixed(1);

    return resultNumber;
  } else {
    return invalidNumber;
  }
};

let flashDriveCapacity = (capacity) => {
  const invalidNumber =
    "not calculated because flash drive capacity is not chosen.";

  if (capacity > 0) {
    const resultNumber = Math.round((capacity * 1024) / 850);

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

export { addition, flashDriveCapacity };

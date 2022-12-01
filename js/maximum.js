let calculateIncome = (depositTerm, clientAmount) => {
  const invalidNumber = "Your value is not a valid number.";
  const bankPercent = 5;

  if (clientAmount > 0) {
    const interestAccrued = (
      ((clientAmount * bankPercent) / 100 / 12) *
      depositTerm
    ).toFixed(2);
    return interestAccrued;
  } else {
    return invalidNumber;
  }
};

// console.log(calculateIncome(6, 1000));

let expressionResult = () => {
  return {
    first: 2 && 0 && 3,
    second: 2 || 0 || 3,
    third: (2 && 0) || 3,
  };
};

// console.log(expressionResult());

// export { calculateIncome, expressionResult };

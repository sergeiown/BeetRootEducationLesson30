let reversedNumber = (userNumber) => {
  let lastNumber;
  let resultNumber = "";
  const invalidNumber = "the value entered is not a valid number.";

  if (userNumber > 0) {
    while (userNumber > 0) {
      lastNumber = userNumber % 10;
      userNumber = Math.floor(userNumber / 10);
      resultNumber += lastNumber;
    }
  } else {
    return invalidNumber;
  }
  return resultNumber;
};

let numberOfChocolates = (amount, price) => {
  const invalidNumber = "because of incorrect number input!";

  if (amount > 0 && price > 0) {
    const chocolateQuantity = Math.floor(amount / price);
    const restAmount = (amount % price).toFixed(2);
    return {
      chocolateQuantity: chocolateQuantity,
      restAmount: restAmount,
    };
  } else {
    return invalidNumber;
  }
};

export { reversedNumber, numberOfChocolates };

reversedNumber = (userNumber) => {
  let lastNumber;
  let resultNumber = "";
  const invalidNumber = "Your value is not a valid number.";

  if (userNumber > 0) {
    while (userNumber > 0) {
      lastNumber = userNumber % 10;
      userNumber = Math.floor(userNumber / 10);
      resultNumber += lastNumber;
    }
  } else {
    // console.log(typeof userNumber);
    return invalidNumber;
  }
  // console.log(typeof userNumber);
  return resultNumber;
};

// console.log(reversedNumber("fxsdjgg"));

numberOfChocolates = (amount, price) => {
  const invalidNumber = "Your value is not a valid number.";

  if (amount > 0 && price > 0) {
    const chocolateQuantity = Math.floor(amount / price);
    const restAmount = amount % price;
    return {
      chocolateQuantity: chocolateQuantity,
      restAmount: restAmount,
    };
  } else {
    return invalidNumber;
  }
};

// console.log(numberOfChocolates(499, 50));

export { reversedNumber, numberOfChocolates };

reversedNumber = () => {
  let userNumber = 123456789;
  let lastNumber;
  let resultNumber = "";

  if (userNumber > 0) {
    while (userNumber > 0) {
      lastNumber = userNumber % 10;
      userNumber = Math.floor(userNumber / 10);
      resultNumber += lastNumber;
    }
  } else {
    console.log("Is not valid nmber");
  }
  return resultNumber;
};

console.log(reversedNumber());

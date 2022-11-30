reversedNumber = () => {
  let userNunber = 123456789;

  if (userNunber > 0) {
    let lastNunber = "";
    var resultNumber = "";

    while (userNunber > 0) {
      lastNunber = userNunber % 10;
      userNunber = Math.floor(userNunber / 10);
      resultNumber += lastNunber;
    }
  } else {
    console.log("Is not valid nmber");
  }
  return resultNumber;
};

console.log(reversedNumber());

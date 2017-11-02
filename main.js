
randomNumber = (sides) => Math.floor(Math.random() * sides) + 1;

printOutput = (message) => {
  let output = document.querySelector("#output");
  output.textContent += " " + message;
}

rollDice = () => {
  let quantity = document.querySelector("#inputQuantity").value;
  let sides = document.querySelector("#inputSides").value;
  let sumFlag = document.querySelector("#sumOption").checked;
  let sum = 0;

  for (let i = 0; i < quantity; i++) {
    let num = randomNumber(sides);
    sum += num;
    printOutput(num);
  }

  if (sumFlag) {
    printOutput("Sum of rolls = " + sum);
  }
}

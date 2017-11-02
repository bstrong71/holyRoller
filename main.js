
randomNumber = (sides) => Math.floor(Math.random() * sides) + 1;

printOutput = (message) => {
  let output = document.querySelector("#output");
  output.textContent += " " + message;
}

rollDice = () => {
  let quantity = document.querySelector("#inputQuantity").value;
  let sides = document.querySelector("#inputSides").value;

  for (let i = 0; i < quantity; i++) {
    printOutput(randomNumber(sides));
  }
}

let output = document.querySelector("#output");
let quantity = document.querySelector("#inputQuantity");
let sides = document.querySelector("#inputSides");
let sumFlag = document.querySelector("#sumOption");
let saveFlag = document.querySelector("#saveOption");

let resultsArr = [];

randomNumber = (sides) => Math.floor(Math.random() * sides) + 1;

printOutput = (message) => {
  output.innerHTML += `<p>${message}</p>`;
}
clearOutput = () => {
  output.innerHTML = "";
}

enableTotal = (e) => {
  if (quantity.value > 1) {
    sumFlag.disabled = false;
  } else {
    sumFlag.disabled = true;
    sumFlag.checked = false;
  }
}

rollDice = () => {
  let sum = 0;
  let content = output.innerHTML;
  clearOutput();

  for (let i = 0; i < quantity.value; i++) {
    let num = randomNumber(sides.value);
    printOutput(num);
    sum += num;
    resultsArr.push(num);
  }

  if (sumFlag.checked && quantity.value > 1) {
    printOutput("Total = " + sum);
  }
  if (saveFlag.checked) {
    output.innerHTML += content;
  }
  if (quantity.value < 1 || sides.value < 2) {
    clearOutput();
    printOutput("I'm sorry, but I can't do that");
  }
}

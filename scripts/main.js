let output = document.querySelector("#output");
let quantity = document.querySelector("#inputQuantity");
let sides = document.querySelector("#inputSides");
let sumFlag = document.querySelector("#sumOption");
let saveFlag = document.querySelector("#saveOption");

randomNumber = (sides) => Math.floor(Math.random() * sides) + 1;

printOutput = (message) => {
  output.innerHTML += `<p>${message}</p>`;
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
  output.innerHTML = "";

  for (let i = 0; i < quantity.value; i++) {
    let num = randomNumber(sides.value);
    sum += num;
    printOutput(num);
  }

  if (sumFlag.checked && quantity.value > 1) {
    printOutput("Total = " + sum);
  }
  if (saveFlag.checked) {
    output.innerHTML += content;
  }
  if (quantity.value < 1 || sides.value < 2) {
    output.innerHTML = "";
    printOutput("I'm sorry, but I can't do that");
  }
}

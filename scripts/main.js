let output = document.querySelector("#output");
let quantity = document.querySelector("#inputQuantity");
let sides = document.querySelector("#inputSides");
let sumFlag = document.querySelector("#sumOption");
let saveFlag = document.querySelector("#saveOption");

let resultsObj = {};

addData = (chart, label, data) => {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  chart.update();
}

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
    if (resultsObj[num]) {
      resultsObj[num]++;
    } else {
      resultsObj[num] = 1;
    }
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

  graphData = [
    ['Roll', 'Frequency']
  ];

  for (let key in resultsObj) {
    let arr = [key, resultsObj[key]];
    graphData.push(arr);
  }
  drawChart();
}

drawChart = () => {
  let data = google.visualization.arrayToDataTable(graphData);

  let options = {
    title: 'Roll Frequency',
    is3D: true,
  };

  let chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}

// Google Graph global variables
google.charts.load("current", {
  packages: ["corechart"]
});
let graphData = [
  ['Roll', 'Frequency']
];

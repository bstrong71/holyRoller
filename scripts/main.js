let output = document.querySelector("#output");
let quantity = document.querySelector("#inputQuantity");
let sides = document.querySelector("#inputSides");
let sumFlag = document.querySelector("#sumOption");
let saveFlag = document.querySelector("#saveOption");
let showGraph = document.querySelector("#showGraph");
let chartFlag = false;

let ctx = document.getElementById("myChart");

let resultsObj = {};
// let labelsArr = [];
// let dataArr = [];

// let myPieChart = new Chart(ctx, {
//   type: 'pie',
//   data: {
//     labels: labelsArr,
//     datasets: [{
//       label: 'Frequency',
//       data: dataArr,
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.5)',
//         'rgba(255, 159, 64, 0.5)',
//         'rgba(255, 206, 86, 0.5)',
//         'rgba(75, 192, 192, 0.5)',
//         'rgba(54, 162, 235, 0.5)',
//         'rgba(153, 102, 255, 0.5)'
//       ]
//     }]
//   }
// });

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
  if (chartFlag) {
    document.querySelector('iframe').remove();
  }
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
  if (!showGraph.checked) {
    ctx.style.display = "none";
  } else {
    ctx.style.display = "block";
  }

  // labelsArr = [];
  // dataArr = [];
  let labelsArr = [];
  let dataArr = [];

  for (let key in resultsObj) {
    labelsArr.push(key);
    dataArr.push(resultsObj[key]);
  }

  console.log('labelsArr', labelsArr);
  console.log('dataArr', dataArr);

  let myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labelsArr,
      datasets: [{
        label: 'Frequency',
        data: dataArr,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(153, 102, 255, 0.5)'
        ]
      }]
    }
  });

  chartFlag = true;
}

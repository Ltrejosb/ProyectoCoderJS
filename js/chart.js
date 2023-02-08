function barGenerate() {

  let imcData = JSON.parse(localStorage.getItem("imcData"));

  // Crear arreglos para los nombres y los valores de IMC
  let names = [];
  let imcValues = [];


  // Recorrer el JSON y agregar los nombres y los valores de IMC a los arreglos correspondientes
  for (let i = 0; i < imcData.length; i++) {
      names.push(imcData[i].name);
      imcValues.push(imcData[i].imc);
  }

  var imcCanvas = document.getElementById("imcChart");

  Chart.defaults.global.defaultFontFamily = "Roboto";
  Chart.defaults.global.defaultFontSize = 18;

  var imcPerson = {
    label: 'IMC',
    data: imcValues,
    backgroundColor: [
      'rgba(0, 99, 132, 0.6)',
      'rgba(30, 99, 132, 0.6)',
      'rgba(60, 99, 132, 0.6)',
      'rgba(90, 99, 132, 0.6)',
      'rgba(120, 99, 132, 0.6)',
      'rgba(150, 99, 132, 0.6)',
      'rgba(180, 99, 132, 0.6)',
      'rgba(210, 99, 132, 0.6)',
      'rgba(240, 99, 132, 0.6)'
    ],
    borderColor: [
      'rgba(0, 99, 132, 1)',
      'rgba(30, 99, 132, 1)',
      'rgba(60, 99, 132, 1)',
      'rgba(90, 99, 132, 1)',
      'rgba(120, 99, 132, 1)',
      'rgba(150, 99, 132, 1)',
      'rgba(180, 99, 132, 1)',
      'rgba(210, 99, 132, 1)',
      'rgba(240, 99, 132, 1)'
    ],
    borderWidth: 2,
    hoverBorderWidth: 0
  };

  var chartOptions = {
      
    scales: {
      yAxes: [{
        barPercentage:0.5,  
        display:true,  
        ticks:{
          beginAtZero: true,
          max: 100,
          min: 0
        }
        
      }]
    },
    elements: {
      rectangle: {
        borderSkipped: 'left',
      }
    }
  };

  var barChart = new Chart(imcCanvas, {
    type: 'horizontalBar',
    data: {
      labels: names,
      datasets: [imcPerson],
    },
    options: chartOptions
  });
}


function emptyArrays() {
  names = [];
  imcValues = [];
}

var button = document.querySelector("#genChart");
button.addEventListener("click", barGenerate);

var button = document.querySelector("#clearChart");
button.addEventListener("click", emptyArrays);




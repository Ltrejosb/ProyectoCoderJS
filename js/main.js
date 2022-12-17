// Array para la clasificacion de hombres
var clasificacionHombre = [
  {
    rango: 'Bajo peso',
    recomendacion: 'Considera aumentar tu ingesta de proteínas y calorías para ganar peso.'
  },
  {
    rango: 'Peso normal',
    recomendacion: '¡Mantén el buen trabajo!'
  },
  {
    rango: 'Sobrepeso',
    recomendacion: 'Considera reducir tu ingesta de calorías y aumentar tu actividad física para perder peso.'
  },
  {
    rango: 'Obeso',
    recomendacion: 'Es importante consultar a un profesional de la salud para desarrollar un plan de pérdida de peso.'
  }
];

// Array para clasificacion de mujeres
var clasificacionMujer = [
  {
    rango: 'Bajo peso',
    recomendacion: 'Considera aumentar tu ingesta de proteínas y calorías para ganar peso.'
  },
  {
    rango: 'Peso normal',
    recomendacion: '¡Mantén el buen trabajo!'
  },
  {
    rango: 'Sobrepeso',
    recomendacion: 'Considera reducir tu ingesta de calorías y aumentar tu actividad física para perder peso.'
  },
  {
    rango: 'Obeso',
    recomendacion: 'Es importante consultar a un profesional de la salud para desarrollar un plan de pérdida de peso.'
  }
];
  //Se une js a el boton "calcular" 
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtenemos los valores de peso, altura y genero
  var peso = document.querySelector('#pesoInput').value;
  var altura = document.querySelector('#alturaInput').value;
  var genero = document.querySelector('#selectorGenero').value;

  // Validamos la información
  if (peso <= 0 || altura <= 0) {
    document.querySelector('#result').innerHTML = 'Datos de entrada inválidos';
    return;
  }

  // Calculamos el IMC
  var imc = peso / (altura / 100) ** 2;

  // Inicializamos el mensaje de resultado
var resultado = 'Tu IMC es ' + imc.toFixed(2) + '. ';

// Añadimos el mensaje segun el genero
if (genero === 'hombre') {
if (imc < 20) {
resultado += clasificacionHombre[0].rango + '. ' + clasificacionHombre[0].recomendacion;
} else if (imc >= 20 && imc < 25) {
resultado += clasificacionHombre[1].rango + '. ' + clasificacionHombre[1].recomendacion;
} else if (imc >= 25 && imc < 30) {
resultado += clasificacionHombre[2].rango + '. ' + clasificacionHombre[2].recomendacion;
} else {
resultado += clasificacionHombre[3].rango + '. ' + clasificacionHombre[3].recomendacion;
}
} else {
if (imc < 19) {
resultado += clasificacionMujer[0].rango + '. ' + clasificacionMujer[0].recomendacion;
} else if (imc >= 19 && imc < 24) {
resultado += clasificacionMujer[1].rango + '. ' + clasificacionMujer[1].recomendacion;
} else if (imc >= 24 && imc < 29) {
resultado += clasificacionMujer[2].rango + '. ' + clasificacionMujer[2].recomendacion;
} else {
resultado += clasificacionMujer[3].rango + '. ' + clasificacionMujer[3].recomendacion;
}
}

// Mostramos el resultado
document.querySelector('#resultado').innerHTML = resultado;
});


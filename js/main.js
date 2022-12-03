//Función para calcular el índice de masa corporal (IMC)

function CalcularIMC(sexo, altura, peso) 
{
  //La función Math.roud sirve para redondear valores
  altura = Math.round(altura) / 100;
  peso = Math.round(peso);
  
  var indice = (peso / (altura * 2));
  var resultado = "";
  //Sexo, si es "m" mujer y si es "h" hombre
  switch (sexo)
  {
    case "m":
      if (indice < 20)
      {
        resultado = "Bajo Peso.";
      }
      else if (indice >= 20 && indice < 24)
      {
        resultado = "Normal.";
      }
      else if (indice >= 24 && indice < 29)
      {
        resultado = "Sobrepeso.";
      }
      else
      {
        resultado = "Obesidad.";
      }  
      break
    case "h":
      if (indice < 21)
      {
        resultado = "Bajo Peso. .";
      }
      else if (indice >= 21 && indice < 25)
      {
        resultado = "Peso Normal.";
      }
      else if (indice >= 25 && indice < 30)
      {
        resultado = "Sobrepeso.";
      }
      else
      {
        resultado = "Obesidad";
      }		   
      break
    default:
      resultado = "No se ha podido calcular. No ha indicado h (hombre) o m (mujer).";
  }
  //Con toFixed reduciremos a 2 el número de decimales a mostrar

  return "Su IMC es: " + indice.toFixed(2) + " y su clasificación es: " + resultado;
}

//Función para mostrar el resultado por pantalla
function MostrarResultadoIMC (sexo, altura, peso, indice)
{
  var mensaje = "Usted mide " + altura / 100 + " metros y pesa " + peso + " Kg. \n \n " + indice;
  alert (mensaje);
}

let rehacer;

do {

var saludo = alert("Bienvenidos a su calculo de IMC \n Porfavor siga las instrucciones ")
//Petición de datos al usuario (sexo, altura, peso)
var sexo = prompt("Indique su sexo,(h) para hombre , (m) para mujer:").toLowerCase();
//La función parseInt permite convertir un string en número
var altura = parseInt(prompt("Indique su altura en centímetros:", ""));
var peso = parseInt(prompt("Indique su peso en kilógramos:", ""));

//Llamamos a las funciones anteriores para el cálculo y para mostrar los resultados
var resultado = CalcularIMC(sexo, altura, peso);
MostrarResultadoIMC(sexo, altura, peso, resultado);

rehacer = prompt("Desea realizar el cálculo nuevamente? (SI/NO)").toUpperCase();
} while (rehacer == "SI");

alert("Muchas gracias");


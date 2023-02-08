// Verificar si hay datos en el Local Storage

let data = JSON.parse(localStorage.getItem("imcData")) || [];

// Cargar los datos guardados en el Local Storage a la tabla

data.forEach(person => {
    const table = document.getElementById("imcTable").getElementsByTagName('tbody')[0];
    const row = table.insertRow();
    Object.values(person).forEach(cellValue => {
        const cell = row.insertCell();
        cell.innerHTML = cellValue;
    });
});

// Agregar evento al formulario para calcular el IMC al hacer submit

document.getElementById("imcForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Obtener los datos del formulario

    let person = {
        name: document.getElementById("name").value,
        weight: document.getElementById("weight").value,
        height: document.getElementById("height").value,
        gender: document.getElementById("gender").value
    };
    
    // Calcular el IMC

    person.imc = (person.weight / (person.height / 100) ** 2).toFixed(2);
    
    // Asignar el consejo según el género y el IMC

    if (person.gender === "hombre") {
    if (person.imc < 20) person.advice = 'Estas debajo del peso recomendado, debes aumentar tu ingesta calórica y hacer ejercicio.';
    else if (person.imc >= 20 && person.imc <= 25) person.advice = 'Estas en el peso recomendado, mantén tu dieta y hábitos de ejercicio.';
    else person.advice = 'Estas por encima del peso recomendado, debes reducir tu ingesta calórica y hacer ejercicio.'
    } else {
    if (person.imc < 19) person.advice = 'Estas debajo del peso recomendado, debes aumentar tu ingesta calórica y hacer ejercicio.';
    else if (person.imc >= 19 && person.imc <= 24) person.advice = 'Estas en el peso recomendado, mantén tu dieta y hábitos de ejercicio.';
    else person.advice = 'Estas por encima del peso recomendado, debes reducir tu ingesta calórica y hacer ejercicio.'
    }
    
    // Agregar la persona al arreglo de datos

    data.push(person);
    
    // Guardar el arreglo de datos en el LocalStorage

    localStorage.setItem("imcData", JSON.stringify(data));
    
    // Agregar la persona a la tabla

    const table = document.getElementById("imcTable").getElementsByTagName('tbody')[0];
    const row = table.insertRow();
    Object.values(person).forEach(cellValue => {
        const cell = row.insertCell();
        cell.innerHTML = cellValue;
        });
    });

    
    
    // Agregar evento al boton limpiar tabla

document.getElementById("clear").addEventListener("click", function() {
    
    // Eliminar el contenido de la tabla

    document.getElementById("imcTable").getElementsByTagName('tbody')[0].innerHTML = "";
    
    // Eliminar los datos guardados en el Local Storage

    localStorage.removeItem("imcData");
    
    // Reiniciar el arreglo de datos
    
    data = [];
});

 





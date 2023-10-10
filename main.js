function calcularFactorial() {
  /*Bloque*/

  const numberFactorial = document.getElementById("factorial");
  const resultado = document.getElementById("respuesta1");
  const num = parseInt(numberFactorial.value);

  if (isNaN(num) || num < 0) {
    resultado.textContent =
      "Por favor ingresa un numero valido mayor o igual a 0";
    return;
  }

  if (num === 0 || num === 1) {
    resultado.textContent = "El factorial de " + num + " es 1.";
    return;
  } else {
    let resultadofinal = 1;
    for (let i = num; i > 0; i--) {
      resultadofinal *= i;
    }
    resultado.textContent = "El factorial de " + num + " es " + resultadofinal;
    return;
  }
}

/* Funcion para verificar palindromos */
function verificarPalindromo() {
  const inputpalindromo = document.getElementById("inputpalindromo");
  const resultado2 = document.getElementById("respuesta2");
  var re = /[^A-Za-z0-9]/g;
  const texto = inputpalindromo.value.toLowerCase().replace(/[^a-z]/g, "");
  var reves = texto.split("").reverse().join("");

  if (texto === "") {
    resultado2.textContent = "Por favor, ingresa una palabra valida";
    return;
  }
  if (texto === reves) {
    resultado2.textContent =
      "Si, la palabra: " + inputpalindromo.value + " es palindromo.";
    return;
  } else {
    resultado2.textContent =
      "No, la palabra: " + inputpalindromo.value + " no es palindromo.";
    return;
  }
}

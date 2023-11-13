function sumar() {
  calcular("suma");
}

function restar() {
  calcular("resta");
}

function multiplicar() {
  calcular("multiplicacion");
}

function dividir() {
  calcular("division");
}

function calcular(operacion) {
  var operand1 = parseFloat(document.getElementById("operando1").value);
  var operand2 = parseFloat(document.getElementById("operando2").value);
  var resultadoInput = document.getElementById("resultado");

  if (isNaN(operand1) || isNaN(operand2)) {
    alert("Los operandos no son válidos.");
    return;
  }

  switch (operacion) {
    case "suma":
      resultadoInput.value = operand1 + operand2;
      break;
    case "resta":
      resultadoInput.value = operand1 - operand2;
      break;
    case "multiplicacion":
      resultadoInput.value = operand1 * operand2;
      break;
    case "division":
      if (operand2 !== 0) {
        resultadoInput.value = operand1 / operand2;
      } else {
        alert("Jamás se puede dividir por cero.");
      }
      break;
    default:
      alert("Operación incorrecta.");
  }
}

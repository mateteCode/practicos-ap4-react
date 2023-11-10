function calcularCosto() {
  var tipoSeguro = document.getElementById("tipoSeguro").value;
  var costoSpan = document.getElementById("costo");

  switch (tipoSeguro) {
    case "basico":
      costoSpan.innerText = " $500";
      break;
    case "intermedio":
      costoSpan.innerText = " $1000";
      break;
    case "premium":
      costoSpan.innerText = " $1500";
      break;
    default:
      costoSpan.innerText = " $500";
  }
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });

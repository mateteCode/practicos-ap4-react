/*
Tengo desarrollada la siguiente función en javascript
*/
function suma(a, b, callback) {
  let c = a + b;
  callback();
}

/*
1. ¿Qué es el tercer parámetro recibido?
El tercer parámetro es una función callback proporcionada como argumento a otra función que la ejecutará al final de su bloque de código.

2. ¿En que casos es obligatorio desarrollar este tipo de funciones?
Las funciones callbacks son a menudos usadas en llamadas asíncronas, que involucran operaciones que llevan un cierto tiempo, y que pueden bloquear la ejecución del programa si no se utilizan mecanimos asincrónico como los callbacks.

3. Realizar un llamado a la función de ejemplo.
*/

suma(1, 2, () => console.log("Suma realizada."));

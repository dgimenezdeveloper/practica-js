/* 
5) Realizá un programa que permita al usuario ingresar valores del mismo tipo para las variables a
y b. Una vez cargadas, la computadora debe mostrar ambas variables por pantalla, intercambiar
entre sí sus valores (que lo cargado en a quede en b, y viceversa), y volver a mostrarlas.
*/

let a = parseInt(prompt('Ingresá un valor para A:'));
let b = parseInt(prompt('Ingresá un valor para B:'));
console.log(`Se muestran A y B \n${a} y ${b}`);

let aux = 0;
aux = a;
a = b;
b = aux;
console.log(`Valores intercambiados\nSe muestran A y B\n${a} y ${b}`);

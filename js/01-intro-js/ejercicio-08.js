/* 
Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe
mostrar los resultados de las 4 operaciones matemáticas básicas con tales números.
*/
let numero_uno = parseInt(prompt('Ingresá el primer número: '));
let numero_dos = parseInt(prompt('Ingresá el segundo número: '));
let suma = numero_uno + numero_dos;
let resta = numero_uno - numero_dos;
let multiplicacion = numero_uno * numero_dos;
let division = numero_uno / numero_dos;

console.log(`${numero_uno} + ${numero_dos} => ${suma}`);
console.log(`${numero_uno} - ${numero_dos} => ${resta}`);
console.log(`${numero_uno} * ${numero_dos} => ${multiplicacion}`);
console.log(`${numero_uno} / ${numero_dos} => ${division}`);

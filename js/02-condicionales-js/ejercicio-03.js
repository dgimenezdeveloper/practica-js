/* 
Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe
indicar cuál de ellos es el mayor.
*/
let numero_uno = parseInt(prompt('Ingresá el primer número'));
let numero_dos = parseInt(prompt('Ingresá el segundo número'));

if (numero_uno > numero_dos) {
    console.log(`El mayor se ${numero_uno}`);
    
} else {
    console.log(`El mayor se ${numero_dos}`);
}
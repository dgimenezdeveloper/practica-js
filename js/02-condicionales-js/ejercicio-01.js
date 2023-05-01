/* 
Realizá un programa que permita al usuario ingresar un número entero. La computadora debe
indicar si se trata de un número par o impar.
*/
let numero = parseInt(prompt('Ingresá un número:'));
if (numero % 2 == 0) {
    console.log(`El número ${numero} es par`);
    
} else {
    console.log(`El número ${numero} es impar`);
}
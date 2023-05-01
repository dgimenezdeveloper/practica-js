/* 
Realizá un programa que permita al usuario ingresar tres números enteros. La computadora debe
indicar cuál de ellos es el mayor.
*/
let numero_uno = parseInt(prompt('Ingresá el primer número:'));
let numero_dos = parseInt(prompt('Ingresá el segundo número:'));
let numero_tres = parseInt(prompt('Ingresá el tercer número:'));

if (numero_uno > numero_dos && numero_uno > numero_tres) {
    console.log(`El mayor es ${numero_uno}`);
} else if (numero_dos > numero_tres && numero_dos > numero_uno) {
    console.log(`El mayor es ${numero_dos}`);
} else {
    console.log(`El mayor es ${numero_tres}`);
}
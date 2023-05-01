/* 
Realizá un programa que permita al usuario ingresar tres números. La computadora debe
mostrarlos ordenados de menor a mayor.
*/

let num1 = parseInt(prompt('Ingresá el primer número:'));
let num2 = parseInt(prompt('Ingresá el segundo número:'));
let num3 = parseInt(prompt('Ingresá el tercer número:'));

if (num1 > num2 && num1 > num3){
    if (num2 > num3){
        console.log(`${num3} ${num2} ${num1}`);
    } else {
        console.log(`${num2} ${num3} ${num1}`);
    }
} else if (num2 > num3 && num2 > num1) {
    if (num3 > num1) {
        console.log(`${num1} ${num3} ${num2}`);
    } else {
        console.log(`${num3} ${num1} ${num1}`);
    }
} else if (num3 > num1 && num3 > num2) {
    if (num2 > num1) {
        console.log(`${num1} ${num2} ${num3}`);
    } else {
        console.log(`${num2} ${num1} ${num3}`);
    }
}
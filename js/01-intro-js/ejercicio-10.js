/* 
Realizá un programa que permita al usuario ingresar los nombres de tres inversores junto al
capital invertido por cada uno. La computadora debe informar qué porcentaje del total aportó cada
uno y cuál es el monto del total aportado entre los tres.
*/

let aportante_uno = prompt('Ingresá el nombre del primer aportante:');
let monto_uno = parseInt(prompt('Ingresá el monto del primer aportante:'));
let aportante_dos = prompt('Ingresá el nombre del segundo aportante:');
let monto_dos = parseInt(prompt('Ingresá el monto del segundo aportante:'));
let aportante_tres = prompt('Ingresá el nombre del tercer aportante:');
let monto_tres = parseInt(prompt('Ingresá el monto del tercer aportante:'));
let capital_total = monto_uno + monto_dos + monto_tres;

console.log(`El capital total es de $${capital_total}`);
console.log(`${aportante_uno} aportó el ${((monto_uno * 100) / capital_total)}%`);
console.log(`${aportante_dos} aportó el ${((monto_dos * 100) / capital_total)}%`);
console.log(`${aportante_tres} aportó el ${((monto_tres * 100) / capital_total)}%`);
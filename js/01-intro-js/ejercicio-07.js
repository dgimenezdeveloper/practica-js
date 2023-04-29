/* 
Realizá un programa que permita al usuario ingresar el ancho y el largo de un terreno en metros
y el valor del metro cuadrado de tierra. La computadora debe mostrar el valor total del terreno y la
cantidad de metros de alambre que serían necesarios para cercarlo completamente en tres pasadas.
*/
let ancho = parseInt(prompt('Ingresá el ancho del terreno:'));
let largo = parseInt(prompt('Ingresá el largo del terreno:'));
let cantidad_pasadas = 3;
let cantidad_alambre = 0;
let valor_metro = parseInt(prompt('Ingresá el valor del m²:'));
let metros_cuadrados = ancho * largo;
let valor_terreno = metros_cuadrados * valor_metro;
let perimetro = (ancho * 2) + (largo * 2);
cantidad_alambre = perimetro * cantidad_pasadas;
console.log(`El terreno vale ${valor_terreno}\nPara cercarlo en ${cantidad_pasadas} pasadas, se necesitan ${cantidad_alambre}m de alambre.`);

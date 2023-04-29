/* 
Realizá un programa que permita al usuario ingresar el valor unitario de cierto artículo y la
cantidad de artículos vendidos por un vendedor, del cual se sabe que gana un sueldo fijo de $14000
más el 16% del monto total vendido. Con tales datos, la computadora debe calcular el sueldo
mensual del vendedor y mostrarlo.
*/

let valor_unitario = parseFloat(prompt('¿Cuánto vale cada artículo?'));
let cantidad_articulos = parseFloat(prompt('¿Cuántos artículos se vedieron en el mes?'));
let sueldo_fijo = 14000;
let total_articulos = valor_unitario * cantidad_articulos;
let porcentaje = total_articulos * 0.16;
let sueldo_mensual = sueldo_fijo + porcentaje;
console.log(`El sueldo mensual es ${sueldo_mensual}`);

/*
    cont = cont + C; (C es una constante)
    acu = acu + V; (V es una variable)
 */

let venta;
let totalVentas = 0;
let cantVentas = parseInt(prompt(`¿Cuántas ventas vas a ingresar?`));

for (let cont = 1; cont <= cantVentas; cont++) {
    venta = parseFloat(prompt(`Ingresá venta ${cont}`));
    totalVentas = totalVentas + venta;
    //console.log(`totalVentas: ${totalVentas}`);
}

console.log(`Total de ventas: ${totalVentas}`);
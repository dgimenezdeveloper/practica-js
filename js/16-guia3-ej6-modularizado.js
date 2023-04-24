function leerEnteroPositivo(mensaje) {
    let num = parseInt(prompt(mensaje));
    while (num <= 0) {
        num = parseInt(prompt(`ERROR: ${mensaje}`));
    }
    return num;
}

let venta;
let totalVentas = 0;
let cantVentas = leerEnteroPositivo(`¿Cuántas ventas vas a ingresar?`);

for (let cont = 1; cont <= cantVentas; cont++) {
    venta = leerEnteroPositivo(`Ingresá venta ${cont}`);
    totalVentas = totalVentas + venta;
}

console.log(`Total de ventas: ${totalVentas}`);
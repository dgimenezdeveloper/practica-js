let venta;
let totalVentas = 0;
let cantVentas = parseInt(prompt(`¿Cuántas ventas vas a ingresar?`));

for (let cont = 1; cont <= cantVentas; cont++) {
    do {
        venta = parseFloat(prompt(`Ingresá venta ${cont}`));
    } while (venta <= 0); // while (!(venta > 0))
    totalVentas = totalVentas + venta;
    //console.log(`totalVentas: ${totalVentas}`);
}

console.log(`Total de ventas: ${totalVentas}`);
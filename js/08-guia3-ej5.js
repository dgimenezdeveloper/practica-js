const EDAD_MINIMA = 18;
let cantEdades = 5;
let contEdadesQueCumplen = 0;
let edad;

for (let cont = 1; cont <= cantEdades; cont++) {
    edad = parseInt(prompt(`Ingresá edad ${cont}`));
    if ((edad > EDAD_MINIMA) && (edad % 2 != 0)) { // Si edad es mayor que EDAD_MINIMA e impar
        contEdadesQueCumplen++;
    }
}

console.log(`Hubo ${contEdadesQueCumplen} edades impares mayores que ${EDAD_MINIMA}`);


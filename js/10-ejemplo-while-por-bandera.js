const EDAD_MINIMA = 18;
let contEdadesQueCumplen = 0;
let edad;

edad = parseInt(prompt(`Ingresá una edad`));
while(edad > 0) {
    if ((edad > EDAD_MINIMA) && (edad % 2 != 0)) { // Si edad es mayor que EDAD_MINIMA e impar
        contEdadesQueCumplen++;
    }
    edad = parseInt(prompt(`Ingresá otra edad`));
}

console.log(`Hubo ${contEdadesQueCumplen} edades impares mayores que ${EDAD_MINIMA}`);


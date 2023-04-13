let inscriptos = parseInt(prompt("¿Cuántos inscriptos hay?"));
let asientosDisponibles = parseInt(prompt("¿Cuántos asientos hay disponibles?"));

if (inscriptos <= asientosDisponibles) {
    console.log("Alcanzan los asientos");
} else {
    console.log(`No alcanzan, faltan ${inscriptos-asientosDisponibles} asientos`);
}

console.log("Chau, gracias...");
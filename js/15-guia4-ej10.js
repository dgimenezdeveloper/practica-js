// Ej 6)
function esMultiplo(a, b) {
    return a % b == 0;
} 

// Ej 10)
function esNumeroPerfecto(num) {
    return num == sumaDivisores(num);
}

function sumaDivisores(num) {
    let acu = 0;
    for (let i = 1; i < num; i++) {
        if ( esMultiplo(num,i) ) {
            acu = acu + i; // acu += i
        }        
    }
    return acu;
}

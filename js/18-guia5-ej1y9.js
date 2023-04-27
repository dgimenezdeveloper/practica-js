



function promedio(arrayDeNumeros) {
    return sumatoria(arrayDeNumeros) / arrayDeNumeros.length;
}

function sumatoria(arrayDeNumeros) {
    let acu = 0;
    for (const num of arrayDeNumeros) {
        acu += num;
    }
    return acu;
}

function mostrarMayoresQue(arrayDeNumeros, valor) {
    for (const num of arrayDeNumeros) {
        if (num > valor) {
            console.log(num);
        }
    }
}

function mostrarSinRepetidos(elArray) {    
    for (let i = 0; i < elArray.length; i++) {
        const elem = elArray[i];
        if( !esta(elem, elArray, i) ) {
            console.log(elem);
        }
    }
}

function esta(elem, elArray, hastaDonde) {
    let i = 0;
    while(i < hastaDonde && elArray[i] != elem) {        
        i++;
    }
    return i < hastaDonde;
}

const numeros = [6, 8, 6, 7, 4, 8, 2]; 
console.log(`Promedio: ${promedio(numeros)}` );
console.log("Valores que lo superaron:")
//mostrarMayoresQue(numeros, promedio(numeros));
mostrarSinRepetidos(numeros);

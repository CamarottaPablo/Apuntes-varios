for(let i = 0; i<10; i++){
    console.log('El valor de i es igual a: ' + i);
} 

function loro(texto) {
    for (let i = 1; i <= 5; i+2) {
       console.log(texto)
    }
}

function noParesDeContarImparesHasta(numero){
    let suma = 0
    for(let i = 1; i <= numero; i+2) {
        (suma = suma + 1)
    }
    return suma
}
console.log(noParesDeContarImparesHasta(5))

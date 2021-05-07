let laMitad = numero => numero / 2;

console.log(laMitad(10));

let dividir = (numeroA, numeroB) => numeroA / numeroB;

console.log(dividir(20, 4));

let tengoQueTrabajar = dia => {
    if (dia == 'Sábado' || dia == 'Domingo') {
        return 'No tenés que trabajar';
    } else {
        return 'Si, Pablo, tenés que ir trabajar';
    }
}

console.log(tengoQueTrabajar('Lunes'))

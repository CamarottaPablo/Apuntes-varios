// If ternario

let fruta = 'Naranja';

let resultadoFruta = fruta == 'Manzana' ?'Buenísimo, me gustan las manzanas' : 'Ufa, quería manzanas'
console.log(resultadoFruta)

// Switch

let semaforo = 'Ninguna';

switch(semaforo) {
    case 'Verde':
        console.log('Puedo cruzar');
        break;
    case 'Amarillo': 
        console.log('Precaución');
        break;
    case 'Rojo':
        console.log('No Cruces, hay que esperar');
        break;
    default:
        console.log('No funciona el semáforo');
}
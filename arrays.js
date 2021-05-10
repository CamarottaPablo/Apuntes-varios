// Arrays

let nombres = ['Pablo', 'Dario', 'Javier'];
let edades = [32,28,74,55];
let valoresDeVerdad = [true, false, true];
let variados = ["Pablo", 34, true, false, edades];

// Un dato concreto dentro de un Array

//console.log(edades);

// ¿Arrays dentro de Arrays?

//console.log(variados[4][1]);

// PUSH y POP
let notas = [3, 5, 10, 9, 7, 8, 8, 8];

notas.push(1);
notas.push(2);
notas.push(4);

let elUltimo = notas.pop();

//console.log(elUltimo);

//Shift

notas.shift();
notas.shift();

notas.unshift(1);

//console.log(notas);

// indexOf (busca de adelante pa atras) lastIndexOf (busca de atras para adelante)

let notes = [ 3, 5, 8, 10, 9, 7, 8, 8];

let posicionDelOcho = notes.indexOf(8);

if (posicionDelOcho != -1){
    //console.log("Lo Encontré");
}

//

let notis = [3, 5, 8, 10, 9, 7, 8, 8];

let resultadoTodoJuntado = notis.join('**');

//console.log(resultadoTodoJuntado);

const productos = [
    { nombre: "Ordenador PC", precio : 699, departamento : "Tecnología" },
    { nombre: "Sartenes Verdes", precio : 39, departamento : "Hogar" },
    { nombre: "Reloj Calculadora", precio : 75, departamento : "Tecnología" },
    { nombre: "Máquina Palomitas", precio : 33, departamento : "Hogar" },
    { nombre: "Mueble TV", precio : 120, departamento : "Hogar" },
    { nombre: "Tuppers PC", precio : 10, departamento : "Hogar" },
]

const muebleTV = productos.find(item => {
    //return item.nombre === "Mueble TV"
    return (/Mueble/g).test(item.nombre)
})
// console.log(muebleTV)

const productosIVA = productos.map(item => {
    let newPrecio = item.precio + item.precio * 0.21
    return { ...item, precio: newPrecio }
})
// console.log(productosIVA)

const productosHogar = productos.filter(item => {
    return item.departamento === "Hogar"
})
// console.log(productosHogar)

const check = produtos.every(item => {
    return item.precio >= 1
})
// console.log(check)

const alguno = produtos.some(item => {
    return item.precio >= 500
})
//console.log(alguno)

const precioTotal = productos.reduce((total, item) => {
    return total + item.precio
}, 0)
//console.log(precioTotal)
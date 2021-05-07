// Arrays

let nombres = ['Pablo', 'Dario', 'Javier'];
let edades = [32,28,74,55];
let valoresDeVerdad = [true, false, true];
let variados = ["Pablo", 34, true, false, edades];

// Un dato concreto dentro de un Array

console.log(edades);

// ¿Arrays dentro de Arrays?

console.log(variados[4][1]);

// PUSH y POP
let notas = [3, 5, 10, 9, 7, 8, 8, 8];

notas.push(1);
notas.push(2);
notas.push(4);

let elUltimo = notas.pop();

console.log(elUltimo);

//Shift

notas.shift();
notas.shift();

notas.unshift(1);

console.log(notas);

// indexOf (busca de adelante pa atras) lastIndexOf (busca de atras para adelante)

let notes = [ 3, 5, 8, 10, 9, 7, 8, 8];

let posicionDelOcho = notes.indexOf(8);

if (posicionDelOcho != -1){
    console.log("Lo Encontré");
}

//

let notis = [3, 5, 8, 10, 9, 7, 8, 8];

let resultadoTodoJuntado = notis.join('**');

console.log(resultadoTodoJuntado);

//Spread Operator en objetos literales
let cursada = {
    curso : "FullStack",
    turno : "Mañana",
    sede : "Belgrano"
};

let estudianteUno = {
    nombre : "Denise",
    email : "denise@gmail.com",
...cursada
};
let estudianteDos = {
    nombre : "Javier",
    email : "javi@gmail.com",
...cursada
};
//Spread Operator en arrays
let peliculasDeAccion = ["End Game", "Iron man 3", "Capitán América"];
let peliculasDeComedia = ["Mi pobre angelito", "Qué pasó ayer?"];
let peliculas = [...peliculasDeAccion, ...peliculasDeComedia]
console.log(peliculas);

//
let generoComedias = {
    nombreGenero : "Comedia",
    popularidad : 3
};

let miPobreAngelito = {
    nombre : "Mi pobre angelito",
    duracion : 120,
    ...generoComedias
}

let quePasoAyer = {
    nombre : "Qué pasó ayer?",
    duracion : 110,
    ...generoComedias
}

console.log(miPobreAngelito);
console.log(quePasoAyer);

function peliculasVistas (...nombreDePeliculas){
    for (let i = 0; i < nombreDePeliculas.length; i++) {
    console.log("La persona ya vió " + nombreDePeliculas[i]);
}
}

peliculasVistas("End Game", "Iron man 3", "Mi pobre angelito", "Qué pasó ayer?");

let amigos = ["Coco", "Pablito", "Sus", "Franco"];

let amigosJSON = JSON.stringify(amigos);

let amigosOriginal = JSON.parse(amigosJSON);

console.log(amigosOriginal);

let persona = {
    nombre : 'Carli',
    edad : 26,
    domicilio : 'Calle Falsa 123',     
}

let personaJSON = JSON.stringify(persona);

let personaOriginal = JSON.parse(personaJSON);

console.log(personaOriginal);
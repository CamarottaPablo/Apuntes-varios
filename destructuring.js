let cursos = ["Programación","MKT", "UX", "Data Science", "UX"];

// Destructuración de Arrays

let [programacion, mkt] = cursos;

console.log(cursos);
console.log(programacion);
console.log(mkt);

let persona = {
    nombre : 'Carli',
    edad : 26,
    domicilio : "Calle falsa 123"
}

// Destructuración de objetos literales

let {nombre, edad} = persona;

console.log(persona);
console.log(nombre);
console.log(edad);   
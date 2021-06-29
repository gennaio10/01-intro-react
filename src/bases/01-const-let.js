
// Variables y constantes "const , let"

// const Variables que no van a cambiar
const nombre = 'Julian';
const apellido = 'Herrera';

// let Variables que pueden cambiar en el tiempo
let valorDado = 5;

console.log(nombre, apellido, valorDado);

// let cambio en el tiempo
valorDado = 4;
console.log(nombre, apellido, valorDado);

// let y const son variables de scope
// las puedes declarar dentro de un nuevo scope (if, for, etc..)
// u se reconocen como nuevas y solo dentro del scope
if ( true ){
    let valorDado = 3;
    console.log(nombre, apellido, valorDado);
    valorDado = 2;
    console.log(nombre, apellido, valorDado);
}

console.log(nombre, apellido, valorDado);


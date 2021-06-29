
// Objetos literales " = { }  o : { }"

// trabajan con llavez de valor
// tienen un protype (Metodos por defecto como .toStrgin() .valueOf , etc...)
// trabajan en pares de valores (llave nombre, llave valor)

const persona = {
   nombre: 'Tony',
   apellido: 'Stark',
   edad: 45,
};

console.log(persona.nombre);
console.log(persona);
console.table(persona);

// se pueden anidar objetos

const personaDireccion = {
   nombre: 'Tony',
   apellido: 'Stark',
   edad: 45,
   direccion: {
      ciudad: 'New York',
      calle: '32',
      numero: '116',
   }
};


console.log(personaDireccion.nombre);
console.log(personaDireccion);
console.log(personaDireccion.direccion);
console.table(personaDireccion);

// copiado de un objeto

// OJO PELIGRO COPIADO " = "
// con el = se crea un nuevo objeto
// apuntando al mismo espacio d ememoria, es decir que es el mismo objeto inicial
// los cambios de uno se ven en el otro
// NO HACER NUNCA - JAMAS - ASI NO SE CLONA UN OBJETO
/*console.log(persona);
const persona2 = persona;
persona2.nombre = 'Peter';
console.log(persona);
console.log(persona2);*/


// ASI SI "..."
// Asi se clona o copia un objeto 
const persona3 = { ...persona };
persona3.nombre = 'Peter';
console.log(persona);
console.log(persona3);


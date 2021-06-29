
// DESESTRUCTURACION
// DESESTRUCTURACION DE OBJETOS
// ASIGNACION DESESTRUCTURANTE

const persona = {
      nombre: 'Tony',
      edad: 45,
      clave: 'Ironman',
}
console.log(persona);

console.log(persona.nombre, persona.clave);
console.log(persona.edad);

const { clave, edad, nombre } = persona;
console.log(nombre, clave);
console.log(edad);


const retornaPersona = (usuario) => {
   const { clave, nombre } = usuario;
   console.log(nombre, clave);
};
retornaPersona(persona);


// desestructuracion en el argumento
const retornaPersona2 = ({ clave, nombre }) => {
   console.log(nombre, clave);
};
retornaPersona2(persona);

// asignar valores por defecto
// si la propiedad no viene coloca un valor por defecto
// si esta la propiedad le pone la que venga
const retornaPersona3 = ({ clave, nombre, rango = 'Capitan' }) => {
   console.log(nombre, clave, rango);
};
retornaPersona3(persona);



//USECONTEXT useContext
const retornaPersona4 = ({ clave, edad, nombre, rango = 'Capitan' }) => {
   return{
      nombreClave: clave,
      anios: edad,
      latlng: {
         lat: 12.345657,
         lng: -12.34567
      }
   }
};
const avenger = retornaPersona4(persona);
const { nombreClave, anios, latlng: { lat, lng } } = avenger;
console.log(avenger);
console.log(nombreClave, anios, lat, lng);










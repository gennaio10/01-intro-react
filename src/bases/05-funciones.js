
// FUNCIONES 

// NO USAR funciones tradicionales 
//function saludar (nombre) {
//   return `Hola, ${ nombre }`;
//}
//console.log(saludar ('Goku'));
// se podria afectar con una nueva declaracion
//saludar = 50;
//console.log(saludar);


// USAR FUNCIONES lambda o DE FECHA Y CON UNA CONSTANTE
// PARA EVITAR SER SOBREESCRITA
const saludar2 = ( nombre ) => {
   return `Hola, ${ nombre }`;
}
console.log(saludar2('Vegeta'));

//si la funcion retorna una sola linea se pueden omitir los {} y el return si es un valor primitivo
const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
console.log(saludar3('Vegeta'));

const saludar4 = () => `Hola`;
console.log(saludar4());

const getUser = () => {
   return {
      uid: 'ABC123',
      username: 'sonGoku'
   }   
}
console.log(getUser());

//si la funcion retorna una objeto linea se pueden omitir los {} y el return pero el contenido en ()
const getUser1 = () => ({
      uid: 'ABC123',
      username: 'sonGoku'
   })
console.log(getUser1());

const user = getUser1();
console.log(user);





const getUsuarioActivo = (nombre) => ({
   uid: 'ABC567',
   username: nombre,
});
const usuarioActivo = getUsuarioActivo('JULIAN');
console.log(usuarioActivo);



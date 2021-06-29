
// Template String " ` Text $ { } ` "
// Concate texto mas javascript

const nombre = 'Julian';
const apellido = 'Herrera';

//concatenacion tradicional
const nombrecompleto = nombre + ' ' + apellido;
console.log ('Tracicional: ' + nombrecompleto);

//concatenacion optimizada con Template String
console.log(`Con TemplateString: ${nombre} ${apellido}`);

function getSaludo (){
   return 'Hola: '; 
};

function getSaludo2 (nombres){
    return `Hola: ${nombres}`; 
 };

console.log(`${getSaludo()} ${nombre} ${apellido}`);

console.log(`Bienvenido, ${getSaludo()} ${nombre} ${apellido}`);

console.log(`Bienvenido, ${getSaludo2(nombre)}`);

console.log(getSaludo2(nombre));


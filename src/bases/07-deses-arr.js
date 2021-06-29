
// DESESTRUCTURACION
// DESESTRUCTURACION DE ARREGLOS

const retornaPersona4 = (valor) => {
   return[ valor, () => { console.log('Hola Mundo') }];
}

const arr = retornaPersona4('Goku');
console.log(arr);

const [ nombre, ges ] = arr;

console.log(nombre);
ges();






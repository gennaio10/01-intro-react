//PROMESAS
//SON ASYN (ASINCRONAS)
//RECIBEN UN CALLBACK CON DOS ARGUMENTOS
//PRIMERO resolve( Que recibe otro CallBack ) y se ejecuta cuando todo esta bien y termina la promesa
//SEGUNDO reject lo vamos a ejecutar cuanod falla o algo no se puede cumplir

import { getHeroeById } from './bases/08-imp-exp'

/* const promesa = new Promise( (resolve, reject) => {
   setTimeout(() => {
      const heroeEncontrado = getHeroeById(6);
      resolve(heroeEncontrado);
   }, 2000);
}); */

//TIENEN TRES METODOS IMPORTANTES.
//como si fuera un    try/catch/finally
//tiene similares    then/catch/finally
//THEN , cuando llega al resolve (Todo salio bien)
//CATCH , cuando fallo o llamamos el reject
//FINALLY , Ejecutamos also sim importar so salio bien o mal
/* promesa.then((heroeEncontrado) => {
   console.log('Heroe: ', heroeEncontrado);
})
.catch ( err => console.warn( err ) ); */


const getHeroeByIdAsync = ( id ) => {
   return new Promise( ( resolve, reject ) => {
      setTimeout(() => {
         const heroeEncontrado = getHeroeById( id );
         if(heroeEncontrado !== undefined){
            resolve( heroeEncontrado );
         } else {
            reject('Heroe no encontrado');
         }
      }, 2000);
   });
}; 

getHeroeByIdAsync(6)
   .then( console.log )
   .catch ( console.warn );

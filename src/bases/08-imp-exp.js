//IMPORT, EXPORT, FUNCIONES COMUNES Y ARREGLOS

//CON export default en heroes.js
import { heroes } from '../data/heroes'

// CON export const heroes en heroes.js
//import {heroes, owners} from '../data/heroes'
//console.log(heroes);
//console.log(owners);


//const getHeroeById = (id) => {
//   return heroes.find( idHeroe => idHeroe.id === id )
//};
//OTRA FORMA DE HACERLO SIMPLIFICANDO LA FUNCION
export const getHeroeById = (id) => heroes.find( idHeroe => idHeroe.id === id );

export const getHeroeByOwner = (owner) => heroes.filter( ownerHeroe => ownerHeroe.owner === owner );


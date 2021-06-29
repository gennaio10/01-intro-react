
// ARREGLOS []

// NO USAR (The array literal notation [] is preferable  no-array-constructor)
//const arreglomalo = new Array();
//console.log(arreglomalo);

// USAR []
const arreglo = [];
console.log(arreglo);

//arreglo con datos iniciales
const arreglocondatos = [1,2,3,4];
console.log(arreglocondatos);

// AGREGAR DATOS
// NO USAR .push
// arreglo.push(2);
// console.log(arreglo);

//let arreglo2MALO = [arreglocondatos, 5];
//console.log(arreglo2MALO);

let arreglo2 = [...arreglocondatos, 5];
console.log(arreglo2);
console.log(arreglocondatos);

let arreglo3 = arreglocondatos.map( function(numero) {
   return numero * 2;
})
console.log(arreglo3);
console.log(arreglocondatos);


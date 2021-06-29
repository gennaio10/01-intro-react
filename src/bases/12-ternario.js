//CONDICIONAL TERNARIO

const activo = true;

//CODIGO TRADICIONAL
/* let mensaje = "";

if (activo) {
  mensaje = "Activo";
} else {
  mensaje = "Inactivo";
}

console.log(mensaje); */


//CODIGO ACTUAL CONDICION TERNARIA
//SE EJECUTA UNO O EL OTRO (COMO IF Y ELSE)
const mensaje = (activo) ? 'Activo' : 'Inactivo';
console.log(mensaje);

//SE EJECUTA SOLO UNO (como solo el IF sin el ELSE)
const mensajeUno = activo && 'Activo';
console.log(mensajeUno);


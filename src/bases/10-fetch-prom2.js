//FETCH API
//PROMESAS ANIDADAS

const apikKey = 'kua7ckiJim07QPyAO3iA0YFUvt0lAq7N';
console.log(`https://api.giphy.com/v1/gifs/random?api_key=${apikKey}`);

const peticion = fetch( `https://api.giphy.com/v1/gifs/random?api_key=${apikKey}` );

/* peticion
.then( resp => { 
   resp.json()
   .then ( data => {
      console.log(data);
   })
 })
.catch( console.warn );  */

peticion
.then( resp => resp.json() )
.then( ({data}) => {
   console.log(data);
   const  { url } = data.images.original;   
   const img = document.createElement('img');
   img.src = url;
   document.body.append(img);
})
.catch( console.warn );



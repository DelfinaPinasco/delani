"/* direccionarlo con el endpoint de searchresults,  esto es lo de rick & morty */

let query = location.search; // recuperamos el querystring
let stringToObject = new URLSearchParams(query); //La trasnformo en OL, // usando el querystring, creamos un objeto del tipo URLSearchParams
let aBuscar = stringToObject.get('.search'); //Obtengo los datos de una propiedad con get()
let url =`https://api.themoviedb.org/3/search/movie?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&query=${aBuscar}&page=1&include_adult=false`

console.log(url);

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        
    })

    .catch(function(error){
        console.log(error);
    })
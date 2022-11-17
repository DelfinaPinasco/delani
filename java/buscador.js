 HEAD

/* let buscador = document.querySelector (".buscador");
let formulario = document.querySelector ("form");
<<<<<<< HEAD
let campoAEvaluar = document.querySelector ("[name='q']") */

let url ('https://api.themoviedb.org/3/authentication/token/new?api_key=15370bef1a25ea674deaaf70270ad202')
fetch

let campoAEvaluar = document.querySelector ("[name='q']")
 fbb8599ec32052e5119da8b4e7be0a92d28ad6cb

let searchbar=document.getElementById('searchbar')


let url = `https://api.themoviedb.org/3/movie/550?api_key=15370bef1a25ea674deaaf70270ad202${id}`
fetch (url)
function buscar (id){
    //fetch
    let url = `https://api.themoviedb.org/3/movie/550?api_key=15370bef1a25ea674deaaf70270ad202${id}`

    fetch (url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(datos);
            let datos = document.querySelector(".peliculas")
            let resultados =datos;
            for
        })
        .catch (function(e){
            console.log(e);
        })
    }
HEAD



let queryString = location.search; //Obtengo la QS
let queryStringToObject = new URLSearchParams(queryString); //La trasnformo en OL
let id = queryStringToObject.get('id'); //Obtengo los datos de una propiedad con get()

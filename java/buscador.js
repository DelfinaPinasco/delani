
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



let queryString = location.search; //Obtengo la QS
let queryStringToObject = new URLSearchParams(queryString); //La trasnformo en OL
let id = queryStringToObject.get('id'); //Obtengo los datos de una propiedad con get()

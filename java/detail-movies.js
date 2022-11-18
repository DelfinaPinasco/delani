window.addEventListener("load", function(){
    let moviedetail = location.search;
    let movieobjeto = new URLSearchParams(moviedetail);
    let movie_id = movieobjeto.get('id');
    console.log(movie_id)
})



let url = `https://api.themoviedb.org/3/movie/${movie_id}?${api_key}=15370bef1a25ea674deaaf70270ad202&language=en-US"`

fetch (url)
.then(function(respuesta) {
    return respuesta.json();
    })

.then(function(data) { 
    let info = data.results;
    console.log(data);
    let container = document.querySelector('.contenedor') 
    `
    <article class= "contenedor">
    <img class = "fotofast" src= "https://image.tmdb.org/t/p/w500${info[index].poster_path}" alt='' /> 
    <h1>${info[index].title}</h1>
    <p class = "estreno"> Fecha de estreno: ${info[index].release_date} </p>
    <p class = "calificacion" > Calificación: ${info[index].vote_avarage} </p>
    <p class = "duracion" > Duración: ${info[index].runtime} </p>
    <p class = "calificación" > Calificación: ${info[index].vote_avarage} </p>
    <p class = "sinópsis" > Sinópsis: ${info[index].overview} </p>
`
    container.innerHTML += contenido
}


.catch(function(error){
    console.log('El error es' + error);
    return error
}))


/*let query1 = location.search
console.log (query1);
let query2 = new URLSearchParams(query1);
console.log(query2)
let id = query2.get("id");
console.log(id); 


//let url = `https://api.themoviedb.org/3/discover/movie?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`
let url =  `https://api.themoviedb.org/3/discover/movie?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`

fetch(url)
.then(function(respuesta) {
    return respuesta.json();
})

.then(function(data) {
    console.log(data);
   <!-- let info = data.results     /* el results es generico y contiene el array  */
    let genero = document.querySelector(".section-movies")
    let contenido = "";       /* comienza vacía porque es la lista a la que se le agregan los elementos  */

    for (let index = 0; index < 5; index++) {         /* i++ se va iterando */ 
    contenido+= `<article class= ".section-movies article">
    <a href ="./detail-genres.html?id=${info[index].id}">    
    <div>
        <h3>${info[i].id} </h3>            
        <img src="https://image.tmdb.org/t/p/w500${info[index].poster_path}" alt='' />
        <h3>${info[index].title}</h3>
        <h3>Fecha de estreno: ${info[index].release_date} </h3>
        </a>
        <div/>
    </article>`
}
    genero.innerHTML += contenido

})

    .catch(function(error){
        console.log(error)
}) */ 
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
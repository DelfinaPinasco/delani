window.addEventListener("load", function(){
    let moviedetail = location.search;
    let movieobjeto = new URLSearchParams(moviedetail);
    let movie_id = movieobjeto.get('id');
})

let apikey = "15370bef1a25ea674deaaf70270ad202"
let url = `(https://api.themoviedb.org/3/movie/${movie_id}?${api_key}=15370bef1a25ea674deaaf70270ad202&language=en-US")`

fetch (url)
    .then(function(res) {
    return res.json();
    })
    .then(function(data) { 
    let info = data.results
    console.log(data);// hay que seguir con esto


    let contenido = document.querySelector('.contenedor') //aca va la class a la que queremos entrar
    contenido+=  `<img class = "fotofast" src= "https://image.tmdb.org/t/p/w500${info[index].poster_path}" alt='' /> 
    <h1>${info[index].title}</h1>
    <p class = "estreno"> Fecha de estreno: ${info[index].release_date} </p>
    <p class = "calificacion" > Calificación: ${info[index].vote_avarage} </p>
    <p class = "duracion" > Duración: ${info[index].runtime} </p>
    <p class = "calificación" > Calificación: ${info[index].vote_avarage} </p>
    <p class = "sinópsis" > Sinópsis: ${info[index].overview} </p>
    
`


})

.catch(function(error){
    console.log('El error es' + error);
    return error
})
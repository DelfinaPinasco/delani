let detailgenre = window.location.search;
let genres = new URLSearchParams(detailgenre);
let id = genres.get('id');
console.log(id)

let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US`
fetch(url)
    .then(function (respuesta) {
        return respuesta.json();
    })
.then (function (respuesta) {
    console.log(respuesta);
    let pelis = document.querySelector (".peliculas") //nuestra variable
    let contenido = ""
    `<article class= "contenedor"> 
        <img class = "fotoriverdale" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt='' /> 
        <h1>${data.name}</h1>
        <p class = "texto"> Fecha de estreno: ${data.first_air_date} </p>
        <p class = "texto" > Calificación: ${data.vote_average} </p>
        <p class = "texto" > Sinópsis: ${data.overview} </p>
        </article>`;
}
    

    
)



/* fetch(url)
    .then(function (respuesta) {
        return respuesta.json();
    })

    .then(function (data) {
        console.log(data);
        let container = document.querySelector('.contenedor')
        let contenido =
        `<article class= "contenedor"> 
        <img class = "fotoriverdale" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt='' /> 
        <h1>${data.name}</h1>
        <p class = "texto"> Fecha de estreno: ${data.first_air_date} </p>
        <p class = "texto" > Calificación: ${data.vote_average} </p>
        <p class = "texto" > Sinópsis: ${data.overview} </p>
        </article>`;
        container.innerHTML += contenido
    }) */
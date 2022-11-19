/* 
let seriesdetail = location.search;
let seriesobjeto = new URLSearchParams(seriesdetail);
let id = seriesobjeto.get('id');
console.log(id)

//let api_key = "15370bef1a25ea674deaaf70270ad202"
let url1 = `https://api.themoviedb.org/3/tv/${id}?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US`


fetch(url1)
.then(function (respuesta) {
    return respuesta.json();
})

.then(function (data) {
    console.log(data);
    let container = document.querySelector('.seriespop')
    let contenido = 
        `
    <article>
    <h2>${data.name}</h2>
    <img class = "fotofast" src= "https://image.tmdb.org/t/p/w500${data.poster_path}" alt='' /> 
    <h1>${data.title}</h1>
    <p class = "texto"> Fecha de estreno: ${data.release_date} </p>
    <p class = "texto" > Calificación: ${data.vote_avarage} </p>
    <p class = "texto" > Duración: ${data.runtime} </p>
    <p class = "texto" > Calificación: ${data.vote_avarage} </p>
    <p class = "texto" > Sinópsis: ${data.overview} </p>
    </article>
    `;
    container.innerHTML += contenido
})


    .catch(function (error) {
        console.log(error);
      
})
 */


let seriedetail = location.search;
let serieobjeto = new URLSearchParams(seriedetail);
let id = serieobjeto.get('id');
console.log(id)

//let api_key = "15370bef1a25ea674deaaf70270ad202"
let url = `https://api.themoviedb.org/3/tv/${id}?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US`

fetch(url)
.then(function (respuesta) {
    return respuesta.json();
})

.then(function (data) {
    console.log(data);
    let container = document.querySelector('.seriespop')
    let contenido = 
        `
    <article>
    <img class = "fotofast" src= "https://image.tmdb.org/t/p/w500${data.poster_path}" alt='' /> 
    <h1>${data.title}</h1>
    <p class = "texto"> Fecha de estreno: ${data.release_date} </p>
    <p class = "texto" > Calificación: ${data.vote_avarage} </p>
    <p class = "texto" > Duración: ${data.runtime} </p>
    <p class = "texto" > Calificación: ${data.vote_avarage} </p>
    <p class = "texto" > Sinópsis: ${data.overview} </p>
    </article>
    `;
    container.innerHTML += contenido
})


    .catch(function (error) {
        console.log(error);
      
})
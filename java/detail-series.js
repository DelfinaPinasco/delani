
let seriedetail = location.search;
let serieobjeto = new URLSearchParams(seriedetail);
let id = serieobjeto.get('id');
console.log(id)

let url = `https://api.themoviedb.org/3/tv/popular${id}?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&page=1`



fetch(url)
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
    })


    .catch(function (error) {
        console.log(error);

    })


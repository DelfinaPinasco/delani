
let seriedetail = location.search;
let serieobjeto = new URLSearchParams(seriedetail);
let id = serieobjeto.get('id');
console.log(id)

let url = `https://api.themoviedb.org/3/tv/{tv_id}?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US`



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
        <p class = "texto"> <u>Fecha de estreno</u>: ${data.first_air_date} </p>
        <p class = "texto" > <u>Calificación</u>: ${data.vote_average} </p>
        <p class = "texto" > <u>Sinópsis</u>: ${data.overview} </p>
        </article>`;
        container.innerHTML += contenido
    })


    .catch(function (error) {
        console.log(error);

    })



    let seriedetail = location.search;
    let serieobjeto = new URLSearchParams(seriedetail);
    let id = serieobjeto.get('id');
    console.log(id)

let url = `https://api.themoviedb.org/3/tv/${id}?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US`

fetch(url)
    .then(function (respuesta) {
        return respuesta.json();
    })

    .then(function (data) {
        console.log(data);
        let container = document.querySelector('.contenedor')
        let contenido = 
            `
        <article class= "contenedor">
        <img class = "fotofast" src= "https://image.tmdb.org/t/p/w500${data.still_path}" alt='' /> 
        <h1>${data.name}</h1>
        <p class = "texto"> Fecha de estreno: ${data.air_date} </p>
        <p class = "texto" > Calificación: ${data.vote_avarage} </p>
        <p class = "texto" > Duración: ${data.episode_run_time} </p>
        <p class = "texto" > Calificación: ${data.vote_avarage} </p>
        <p class = "texto" > Sinópsis: ${data.overview} </p>
        </article>
        `;
        contenedor.innerHTML += contenido
    })


        .catch(function (error) {
            console.log(error);
        
    })


    
    let moviedetail = location.search;
    let movieobjeto = new URLSearchParams(moviedetail);
    let id = movieobjeto.get('id');
    console.log(id)

let url = `https://api.themoviedb.org/3/movie/${id}?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US`


fetch(url)
    .then(function (respuesta) {
        return respuesta.json();
    })

    .then(function (data) {
        console.log(data);
        let container = document.querySelector('.contenedor')
        let contenido = 
        `<article class= "contenedor">
        <img class = "fotofast" src= "https://image.tmdb.org/t/p/w500${data.poster_path}" alt='' /> 
        <h1>${data.title}</h1>
        <p class = "texto"> <u>Fecha de estreno</u>: ${data.release_date} </p>
        <p class = "texto" > <u>Duración</u>: ${data.runtime} minutos </p>
        <p class = "texto" > <u>Calificación</u>: ${data.vote_avarage} </p>
        <p class = "texto" > <u>Sinópsis</u>: ${data.overview} </p>
        </article>
        `;
        container.innerHTML += contenido
    })


        .catch(function (error) {
            console.log(error);
          
    })



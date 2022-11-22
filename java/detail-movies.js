
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
       
     <p class = "texto"> <u>Titulo</u>: ${data.title} </p> <img class = "fotofast" src= "https://image.tmdb.org/t/p/w500${data.poster_path}" alt='' /> 
        <p class = "texto"> <u>Fecha de estreno</u>: ${data.release_date} </p>
        <p class = "texto" > <u>Duración</u>: ${data.runtime} minutos </p>
        <p class = "texto" > <u>Calificación</u>: ${data.vote_average} </p>
        <p class = "texto" > <u>Sinópsis</u>: ${data.overview} </p>
        </article>
        `;
        container.innerHTML += contenido
    })


    .catch(function (error) {
        console.log(error);

    })


    //Boton de favoritos

    let favoritosm = []

    let recuperoStorage = localStorage.getItem("favoritos")

    if (recuperoStorage != null) {
        favoritosm = JSON.parse(recuperoStorage)
    }

    if (favoritosm.includes(pelicula)) {
        favoritosm.innerText = "Quitar de favoritos";
    }
    fav.addEventListener ("click", function(e){
        e.preventDefault();
        if (favoritosm.includes(pelicula)){
            let indice = favoritosm.indexOf(pelicula)
            favoritosm.splice(indice,1);
            fav.innerText = "Agregar a favoritos";

        }else{
            favoritosm.push(pelicula)
            fav.innerText = "Quitar de favoritos"
        }
        let favsToString = JSON.stringify(favoritosm);
        localStorage.setItem ("favoritos", favsToString)
    })
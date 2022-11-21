
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
        `<article class= "contenedor"> 
        <p class = "texto"> <u>Titulo</u>: ${data.name} </p>
        <img class = "fotoriverdale" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt='' /> 
        <p class = "texto"> <u>Fecha de estreno</u>: ${data.first_air_date} </p>
        <p class = "texto" > <u>Calificación</u>: ${data.vote_average} </p>
        <p class = "texto" > <u>Sinópsis</u>: ${data.overview} </p>
        </article>`;
        container.innerHTML += contenido
    })


    .catch(function (error) {
        console.log(error);

    })


//favoritos

    let favoritoss = []

    let recuperoStorage = localStorage.getItem("favoritos")

    if (recuperoStorage != null) {
        favoritoss = JSON.parse(recuperoStorage)
    }

    if (favoritoss.includes(pelicula)) {
        favoritoss.innerText = "Quitar de favoritos";
    }
    fav.addEventListener ("click", function(e){
        e.preventDefault();
        if (favoritoss.includes(pelicula)){
            let indice = favoritoss.indexOf(pelicula)
            favoritoss.splice(indice,1);
            fav.innerText = "Agregar a favoritos";

        }else{
            favoritoss.push(pelicula)
            fav.innerText = "Quitar de favoritos"
        }
        let favsToString = JSON.stringify(favoritoss);
        localStorage.setItem ("favoritos", favsToString)
    })


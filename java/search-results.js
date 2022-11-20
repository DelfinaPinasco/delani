/* direccionarlo con el endpoint de searchresults,  esto es lo de rick & morty */

let query = location.search; // recuperamos el querystring
let stringToObject = new URLSearchParams(query); //La trasnformo en OL, // usando el querystring, creamos un objeto del tipo URLSearchParams
let aBuscar = stringToObject.get('.search'); //Obtengo los datos de una propiedad con get()
console.log(search);

let apiKey = "15370bef1a25ea674deaaf70270ad202"
let url = `https://api.themoviedb.org/3/search/multi?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&query=${aBuscar}%7D&page=1&include_adult=false`

//`https://api.themoviedb.org/3/search/movie?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&query=${aBuscar}&page=1&include_adult=false`


let resultados = document.querySelector('.results')


fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let info = data.results;
        for (let i = 0; i < info.length; i++) {
            if (info[i].media_type == "tv") {

                results.innerHTML += <li>
                    <a href="detail-series.html?id=${info[i].id}"">
                    <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="">
                    </a>
                </li>
            } else if (info[i].media_type == "movie") {
                /* results.innerHTML += `<li>Pelicula: ${info[i].title}</li>` */

                results.innerHTML += <li>
                    <a href="detail-movies.html?id=${info[i].id}">
                        <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="">
                    </a>
                </li>
            }

        }

    })

        
    })

.catch (error => console.log(error))
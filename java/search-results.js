let queryString = window.location.search;
console.log(queryString);
let queryObject = new URLSearchParams(queryString)
let search = queryObject.get ('search');
console.log(search);


let apiKey = "15370bef1a25ea674deaaf70270ad202"
<<<<<<< HEAD
let url = `https://api.themoviedb.org/3/search/multi?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&query=${aBuscar}%7D&page=1&include_adult=false`

//`https://api.themoviedb.org/3/search/movie?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&query=${aBuscar}&page=1&include_adult=false`

=======
let url = `https://api.themoviedb.org/3/search/multi?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&query=${search}&page=1&include_adult=false`
>>>>>>> 8565fcee6f39e8d71304a2eef4a22dd2d82b26e2

let resultados = document.querySelector('.resultados')


fetch(url)
<<<<<<< HEAD
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
=======
.then(function (respuestas){
    return respuestas.json()
})
>>>>>>> 8565fcee6f39e8d71304a2eef4a22dd2d82b26e2

.then(function(data){
    console.log(data);
    let info = data.results;

<<<<<<< HEAD
.catch (error => console.log(error))
=======
    for (let i=0; i<info.length; i++){
        if(info[i].media_type == "tv"){
            /* resultados.innerHTML += `<li>Serie: ${info[i].original_name}</li>` */
            resultados.innerHTML += `<li>
                                        <a href="detail-serie.html?id=${info[i].id}">
                                            <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="">
                                         </a>
                                    </li>`
        } else if (info[i].media_type == "movie"){
            /* resultados.innerHTML += `<li>Pelicula: ${info[i].title}</li>` */

            resultados.innerHTML += `<li>
                                        <a href="detail-movie.html?id=${info[i].id}">
                                            <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="">
                                        </a>
                                    </li>`
        }
        
    }
    
})
.catch(error => console.log(error))
>>>>>>> 8565fcee6f39e8d71304a2eef4a22dd2d82b26e2

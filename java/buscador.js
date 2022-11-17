let apiKey = "15370bef1a25ea674deaaf70270ad202a"
let url = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US"

fetch(url)
.then(function(respuesta) {
    return respuesta.json();
})
.then(function(data) {
    console.log(data.results);
    let peliculasPopulares = document.querySelector("h1")
    let peliculas = ""
    for (let index = 0; index < data.results.length; index++) {
        const element = data.results[index];
        
        peliculas+=`
        <article class= cartelera>
        <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt='imagen' />
         <p>Name:${element.title}</p>
         <p>Date: ${element.release_date} </p>
        </article>`
    }
    peliculasPopulares.innerHTML=peliculas
})
.catch(function(error){
    console.log(error);
    return error

})
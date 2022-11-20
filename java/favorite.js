//let url = `https://api.themoviedb.org/3/account/%7Baccount_id%7D/favorite/movies${id}?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&sort_by=created_at.asc&page=1`

let recupStoragePelic = localStorage.getItem ("favoritosPeliculas");
let favoritosPelic = JSON.parse(recuperoStoragePelic);

let recupStorageSerie = localStorage.getItem ("favoritosSerie");
let favoritosSeries = JSON.parse(recuperoStorageSerie);

let favs = document.querySelector (".containerpelis")
let favs1 = document.querySelector (".containerseries")

if (favoritosPelic.length == 0 || favoritos == null){
  favs.innerHTML = <p>Aún no hay peliculas favoritas.</p>

} else {  
  let peliculasFavs = ''
  for (let i = 0; i < favoritosPelic.length; i++) { 
    let url = 'https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key=b0c989c37b55d3ea4a70eda0aeea1b02&language=en-US&sort_by=created_at.asc&page=1'
    fetch (url)
    .then (function (respuesta) {
      return respuesta . json ()
    }) 
    .then (function(data) {
      console.log (data)
      let title = data.title
      let id = data.id
      let imagen = data.poster_path
      let fecha = data.release_date
      peliculasFavs += <a href="./detail-movie.html?idPersonaje=${id}">
        <img class = "fotofast" src= "https://image.tmdb.org/t/p/w500${data.poster_path}" alt='' /> 
        <p>${data.title}</p>
        <p class = "texto"> Estreno: ${data.release_date} </p>
      </a>
      favs.innerHTML = peliculasFavs
      return data

     }
    )
      }
     }

.catch (function(error){ //corregir error aca
  console.log (error);
  return error
})

//Bloque para array de peliculas
if (favoritosSeries.length == 0 || favoritos == null){
  favs1.innerHTML = <p>Aún no hay series favoritas.</p>

} else {
  let seriesFavs = ''
  for (let i = 0; i < favoritosSeries.length; i++) {
    let urlseries = 'https://api.themoviedb.org/3/tv/${tv_id}?api_key=b0c989c37b55d3ea4a70eda0aeea1b02&language=en-US'
    fetch (urlseries)
    .then (function (respuesta) {
      return respuesta . json ()
    })
    .then (function(data) {
      console.log (data)
      let title = data.title
      let id = data.id
      let imagen = data.poster_path
      let fecha = data.release_date
      seriesFavs += <a href="./detail-serie.html?idPersonaje=${id}">
        <img class = "fotoriverdale" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt='' /> 
        <p>${data.name}</p>
        <p class = "texto"> Estreno: ${data.first_air_date} </p>
      </a>
      favs1.innerHTML = seriesFavs
      return data

     })

.catch (function(error){
  console.log (error);
  return error
})
  }
}


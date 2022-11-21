let apiKey = "b0c989c37b55d3ea4a70eda0aeea1b02"
let recupStorage = localStorage.getItem ("favoritos");
let favoritos = JSON.parse(recuperoStorage);

let recupStorageSeries = localStorage.getItem ("favoritosSeries");
let favoritosSeries = JSON.parse(recuperoStorageSeries);

let section1 = document.querySelector (".container1")
let section2 = document.querySelector (".container2")

if (favoritos.length == 0 || favoritos == null){
  section1.innerHTML = '<p>Aún no hay peliculas favoritas.</p>'

}
else {  
  let pelisFavoritas = '';
  for (let i = 0; i < favoritos.length; i++) { 
    let url = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=${api_key}&language=en-US`
    fetch (url)
    .then (function (respuesta) {
      return respuesta . json ()
    }) 
    .then (function(data) {
      console.log (data)
      let titulo = data.title
      let imagenes = data.poster_path
      let id = data.id
      let fecha = data.release_date
      pelisFavoritas += `<article class = ".favoritospeliculas">
                      <a href="./detail-movie.html?idPersonaje=${id}">
                      <img class = "fotofast" src= "https://image.tmdb.org/t/p/w500${imagenes}" alt='' /> 
                      <p>titulo:${titulo}</p>
                      <p> Estreno: ${fecha} </p>
                      </a>
                      </article>`
      section1.innerHTML = pelisFavoritas
      return data
     })
     .catch(function(error){
console.log (error);
return error
    })

      }
     }
     /* series */
     if (favoritos.length == 0 || favoritos == null){
      section1.innerHTML = '<p>Aún no hay peliculas favoritas.</p>'
    
    }
    else {  
      let pelisFavoritas = '';
      for (let i = 0; i < favoritos.length; i++) { 
        let url = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=${api_key}&language=en-US`
        fetch (url)
        .then (function (respuesta) {
          return respuesta . json ()
        }) 
        .then (function(data) {
          console.log (data)
          let titulo = data.title
          let imagenes = data.poster_path
          let id = data.id
          let fecha = data.release_date
          pelisFavoritas += `<article class = ".section1">
                          <a href="./detail-movie.html?idPersonaje=${id}">
                          <img class = "fotofast" src= "https://image.tmdb.org/t/p/w500${imagenes}" alt='' /> 
                          <p>titulo:${titulo}</p>
                          <p> Estreno: ${fecha} </p>
                          </a>
                          </article>`
          section1.innerHTML = pelisFavoritas
          return data
         })
         .catch(function(error){
    console.log (error);
    return error
        })
    
          }
         }



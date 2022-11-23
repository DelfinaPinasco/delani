let campo = document.querySelector('.search')
let aviso = document.querySelector('.textooo')
let formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(evento){  
    evento.preventDefault()
    console.log("Error. Sin enviar")
if (campo.value == "") {
    aviso.innerText = 'El campo no puede estar vacío';
    campo.style.outline = '2px solid red'
    aviso.style.color = 'red'
}
else if (campo.value.length < 3){
    aviso.innerText = 'Debe ingresar más caracteres';
    campo.style.outline = '2px solid red'
    aviso.style.color = 'red'
}
else {
    this.submit()
}
})


// 1 - recuperar el storage 
let recuperoStorage = localStorage.getItem ("favoritos");
let favoritos = JSON.parse(recuperoStorage);

let recuperoStorageSeries = localStorage.getItem ("favoritosSeries");
let favoritosSeries = JSON.parse(recuperoStorageSeries);

let section1 = document.querySelector (".mis-favoritos-peliculas")
let section2 = document.querySelector (".mis-favoritos-series")

let api_key = '15370bef1a25ea674deaaf70270ad202'

if (favoritos.length == 0 || favoritos == null){
  section1.innerHTML = '<p>No hay favoritos seleccionados.</p>'

}
else {  
  let pelisFavoritas = '';
   // pedir a la api los dotos de todos los ids del array de peliculas elegidas
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



//let url = `https://api.themoviedb.org/3/account/%7Baccount_id%7D/favorite/movies${id}?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&sort_by=created_at.asc&page=1`
let apiKey = "371e304b1b9f8df6a3f0e225dc4511b7"

let recupStoragePelic = localStorage.getItem ("favoritospeliculas");
let favoritosPelic = JSON.parse(recuperoStoragepelic);

let recupStorageSerie = localStorage.getItem ("favoritosserie");
let favoritosSeries = JSON.parse(recuperoStorageserie);

let favs = document.querySelector (".containerpelis")
let favs1 = document.querySelector (".containerseries")

//Bloque para array de peliculas
if (favoritosPelic.length == 0 || favoritos == null){
  favs.innerHTML = <p>Aún no hay peliculas favoritas.</p>

} else { //fijarse donde cierra 
  let peliculasFavs = ''
  for (let i = 0; i < favoritosPelic.length; i++) { //fijarse donde cierra
    let url = 'https://api.themoviedb.org/3/movie/${favoritosPelic[i]}?api_key={apiKey}&language=en-US'
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
.catch (function(error){
  console.log (error);
  return error
})

//Bloque para array de peliculas
if (favoritosSeries.length == 0 || favoritos == null){
  favs2.innerHTML = <p>Aún no hay series favoritas.</p>

} else {
  let seriesFavs = ''
  for (let i = 0; i < favoritosSeries.length; i++) {
    let urlseries = 'https://api.themoviedb.org/3/movie/${favoritosSeries[i]}?api_key={apiKey}&language=en-US'
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
      favs2.innerHTML = seriesFavs
      return data

     })

.catch (function(error){
  console.log (error);
  return error
})
  }
}


/*let queryString = location.search; //Obtengo la QS
let queryStringToObject = new URLSearchParams(queryString); //La trasnformo en OL
let id = queryStringToObject.get('id'); //Obtengo los datos de una propiedad con get()


let url = `https://api.themoviedb.org/3/account/%7Baccount_id%7D/favorite/movies${id}?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&sort_by=created_at.asc&page=1`

console.log(url);




// cuando se pulsa en "agregar a favoritos"
document.getElementById(".favoritos").addEventListener("click", function(e) {
    //los guardamos en un objeto
  var datos = {
    id: document.getElementById("producto-id").value,
    nombre: document.getElementById("producto-nombre").textContent,
    url: document.location.href
  };
    // leemos los favoritos del localStorage
  var favoritos = localStorage.getItem("favoritos") || "[]";
  favoritos = JSON.parse(favoritos);

   // buscamos el producto en la lista de favoritos
   var posLista = favoritos.findIndex(function(e) { return e.id == datos.id; });
   if (posLista > -1) {
     // si está, lo quitamos
     favoritos.splice(posLista, 1);
   } else {
     // si no está, lo añadimos
     favoritos.push(datos);
   }
 
   // guardamos la lista de favoritos 
   localStorage.setItem("favoritos", JSON.stringify(favoritos));
 
 });

 fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        //Capturamos DOM
        let section = document.querySelector('.detalle')

        section.innerHTML += `<article>
                                <h2>Nombre: ${data.name}</h2>
                                <img src="${data.image}">
                                <p> Status: ${data.status}</p>
                                <p> Especie: ${data.species}</p>
                                <p> Genero: ${data.gender}</p>
                            </article>`   
    })
    .catch(function(error){
        console.log(error);
    })

// 1 - crear un array para ir completando con datos
let favoritos = [];

// 2 - recupero datos del storage
let recuperoStorage= localStorage.getItem("favoritos"); */
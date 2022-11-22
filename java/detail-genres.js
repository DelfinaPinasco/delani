
<<<<<<< HEAD
let queryString = location.search 
let queryStringToObject = new URLSearchParams(queryString); 
let id = queryStringToObject.get('id');

//peliculas
let url = `https://api.themoviedb.org/3/discover/movie?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    fetch(url)
    .then(function(response){
        return response.json()

        })

    .then (function(data){
        console.log(data);
        let generoApi = data.results
        let bContainer= document.querySelector('.sectionnn');
        let contenidoT= ''
        for (let i =0 ; i<5; i++){
            contenidoT +=
            `<article class="peliculas">
            <a href="./detalle-genres.html?id=${generoApi[i].id}">
            <div class="bloque-item-lista">
                <h1 id="tituloGenero" class="titulopelis">${generoApi[i].original_title}</h1>
                <img id="imagenPelicula" class="imagenes" src="https://image.tmdb.org/t/p/w500${generoApi[i].poster_path}" alt="foto1">
                <p id="textoPelicula" class="texto"> ${generoApi[i].overview}</p>
                <p class="estreno">${generoApi[i].release_date} </p>
            </div>
             </a>
            </article>`
            
        }
        console.log(contenidoT);
        bContainer.innerHTML = contenidoT
    
    })
        
     
    
=======
//peliculas
let priurl = `https://api.themoviedb.org/3/discover/movie?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
fetch(priurl)
.then(function (respuesta) {
return respuesta.json();
})
.then(function (data) {
        console.log(data);
        let pelis = document.querySelector(".peliculas") //nuestra variable
        let info = data.results
        console.log(info);
        let contenido = "";

        for (let index = 0; index < info.length; index++) {         /* i++ se va iterando */ 
        contenido +=
        `<article class= "container img">
        <a href ="./detail-movie.html?id=${info[index].id}">                 
        <img src="https://image.tmdb.org/t/p/w500${info[index].poster_path}" alt='' />
         <h3>${info[index].title}</h3>
         </a>
        </article>`
          
 }
pelis.innerHTML += contenido

 })

.catch(function (error) {
    console.log('El error es' + error);
})
>>>>>>> 41fc3559d04bac470f2f20c2cafbdb4440f7e524

//series

<<<<<<< HEAD
let urlGeneros = `https://api.themoviedb.org/3/discover/tv?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
    fetch(urlGeneros)
    .then(function(response){
        return response.json()

        })
=======
    //series
let genero2 = "tv"
let segurl = `https://api.themoviedb.org/3/discover/tv?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
fetch(segurl)
.then(function (respuesta) {
return respuesta.json();
})
.then(function (data) {
console.log(data);
let info = data.results ;
console.log(info);
let series = document.querySelector(".series") //nuestra variable
let contenido = "";

for (let index = 0; index < info.length; index++) {         /* i++ se va iterando */ 
    contenido+=
`<article class= "container img">
 <a href ="./detail-serie.html?id=${info[index].id}">    
 <img src="https://image.tmdb.org/t/p/w500${info[index].poster_path}" alt='' />
  <h3>${info[index].name}</h3>
  </a>
 </article>`    
>>>>>>> 41fc3559d04bac470f2f20c2cafbdb4440f7e524

    .then (function(data){
        console.log(data);
        let generoApi = data.results
        let bContainer= document.querySelector('.sectionnn');
        let contenidoT= ''
        for (let i =0 ; i<5; i++){
            contenidoT +=
            `<article class="series">
            <a href="detalle-genres.html?id=${generoApi[i].id}">
            <div class="bloque-item-lista">
                <h1 id="tituloGenero" class="titulopelis">${generoApi[i].original_title}</h1>
                <img id="imagenPelicula" class="imagenes" src="https://image.tmdb.org/t/p/w500${generoApi[i].poster_path}" alt="foto1">
                <p id="textoPelicula" class="texto"> ${generoApi[i].overview}</p>
                <p class="estreno">${generoApi[i].release_date} </p>
            </div>
             </a>
            </article>`
            
        }
        console.log(contenidoT);
        bContainer.innerHTML = contenidoT
    
<<<<<<< HEAD
    })
        
=======
}

series.innerHTML += contenido

})

.catch(function (error) {
    console.log('El error es' + error);
})
>>>>>>> 41fc3559d04bac470f2f20c2cafbdb4440f7e524


 
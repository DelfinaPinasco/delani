let detailgenre = window.location.search;
console.log (detailgenre);
let genres = new URLSearchParams(detailgenre);
let id = genres.get('id');
console.log(id);
let genero = "movie"

//peliculas
let priurl = `https://api.themoviedb.org/3/discover/movie?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
fetch(priurl)
    .then(function (respuesta) {
    return respuesta.json();
    })
    .then(function (data) {
        console.log(data);
        let pelis = document.querySelector(".peliculas") //nuestra variable
        let contenido = "";
        let info = data.results ;
        //console.log (info)

        for (let index = 0; index < info.length; index++) {         /* i++ se va iterando */ 
        contenido+=
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

    
    }

    series.innerHTML += contenido

    })

    .catch(function (error) {
        console.log('El error es' + error);
    })






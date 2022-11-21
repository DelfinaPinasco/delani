let detailgenre = window.location.search;
console.log (detailgenre);
let genres = new URLSearchParams(detailgenre);
let id = genres.get('id');
console.log(id);
let genero = "movie"

//peliculas
let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US`
fetch(url)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
        console.log(data);
        let pelis = document.querySelector(".peliculas") //nuestra variable
        let contenido = "";
        let info = data.results ;
        //console.log (info)
        //let contenido = "";

        for (let index = 0; index < info.length; index++) {         /* i++ se va iterando */ 
        contenido+=
        `<article class= "contenedor">
        <a href ="./detail-movie.html?id=${info[index].id}">                 
        <img src="https://image.tmdb.org/t/p/w500${info[index].poster_path}" alt='' />
         <h3>${info[index].title}</h3>
         </a>
        </article>`

        pelis.innerHTML += contenido
          //*  `<article class= "contenedor"> 
       // <h1>${data.with_genres}</h1>
       // <img class = "fotoriverdale" src="https://image.tmdb.org/t/p/w500${data.backdrop_path}" alt='' /> `


    }
    //pelis += contenido
    

    })

    .catch(function (error) {
        console.log('El error es' + error);
    })


    //series
    let genero2 = "tv"
    let url2 = `https://api.themoviedb.org/3/genre/tv/list?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US`
fetch(url2)
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
        `<article class= "contenedor">
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






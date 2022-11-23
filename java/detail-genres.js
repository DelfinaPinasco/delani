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

let detailgenre = window.location.search;
console.log (detailgenre);
let genres = new URLSearchParams(detailgenre);
let id = genres.get('id');
console.log(id);
let genero = "movie"

//peliculas
let priurl = `https://api.themoviedb.org/3/discover/movie?api_key=15370bef1a25ea674deaaf70270ad202&language=es-ES&with_genres=${id}&sort_by=popularity.desc`
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


    //series
let genero2 = "tv"
let segurl = `https://api.themoviedb.org/3/discover/tv?api_key=15370bef1a25ea674deaaf70270ad202&language=es-ES&with_genres=${id}&sort_by=popularity.desc`
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

    
}

series.innerHTML += contenido

})

.catch(function (error) {
    console.log('El error es' + error);
})






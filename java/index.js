
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



/* para que aparezcan la division por section, cada una con su url y selector */

let priurl = "https://api.themoviedb.org/3/movie/top_rated?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&page=1"

let segurl = "https://api.themoviedb.org/3/tv/popular?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&page=1"

let terurl = "https://api.themoviedb.org/3/movie/upcoming?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&page=1"


//cada section tiene un url y un fetch propio/

//prisection

fetch(priurl)
.then(function(respuesta) {
return respuesta.json();
})

    .then(function(data) {
        console.log(data);
        let info = data.results     /* el results es generico y contiene el array  */
        let prisection = document.querySelector(".peliculaspopulares")
        let contenido = "";       /* comienza vacía porque es la lista a la que se le agregan los elementos  */

    for (let index = 0; index < info.length; index++) {         /* i++ se va iterando */ 
        contenido+=
        `<article class= "container img">
        <a href ="./detail-movie.html?id=${info[index].id}">                 
        <img src="https://image.tmdb.org/t/p/w500${info[index].poster_path}" alt='' />
         <h3>${info[index].title}</h3>
         <h3>Fecha de estreno: ${info[index].release_date} </h3>
         </a>
        </article>`
    }
        prisection.innerHTML += contenido
})
.catch(function(error){
console.log('El error es' + error);
})

//segsection 
fetch(segurl)
.then(function(respuesta) {
return respuesta.json();
})

.then(function(data) {
 console.log(data);
 let info = data.results     /* el results es generico y contiene el array  */
 let segsection = document.querySelector(".seriespopulares")
 let contenido = "";       /* comienza vacía porque es la lista a la que se le agregan los elementos  */

for (let index = 0; index < info.length; index++) {         /* i++ se va iterando */ 
 contenido+=
 `<article class= "container img">
 <a href ="./detail-serie.html?id=${info[index].id}">                 
 <img src="https://image.tmdb.org/t/p/w500${info[index].poster_path}" alt='' />
  <h3>${info[index].name}</h3>
  <h3>Fecha de estreno: ${info[index].first_air_date} </h3>
  </a>
 </article>`;
}
 segsection.innerHTML += contenido

})
.catch(function(error){
console.log('El error es' + error);
})

//tersection
fetch(terurl)
.then(function(respuesta) {
return respuesta.json();
})

.then(function(data) {
    console.log(data);
    let info = data.results     /* el results es generico y contiene el array  */
    let tersection = document.querySelector(".peliculasnuevas")
    let contenido = "";       /* comienza vacía porque es la lista a la que se le agregan los elementos  */

for (let index = 0; index < info.length; index++) {         /* i++ se va iterando */ 
    contenido+=
    `<article class= "container img">
    <a href ="./detail-movie.html?id=${info[index].id}">                 
    <img src="https://image.tmdb.org/t/p/w500${info[index].poster_path}" alt='' />
     <h3>${info[index].title}</h3>
     <h3>Fecha de estreno: ${info[index].release_date} </h3>
     </a>
    </article>`
}
    tersection.innerHTML += contenido

})
.catch(function(error){
console.log('El error es' + error);
})
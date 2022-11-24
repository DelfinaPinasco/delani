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

let seriedetail = location.search;
let serieobjeto = new URLSearchParams(seriedetail);
let id = serieobjeto.get('id');
console.log(id)

let url = `https://api.themoviedb.org/3/tv/${id}?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US`


fetch(url)
    .then(function (respuesta) {
        return respuesta.json();
    })

    .then(function (data) {
        console.log(data);
        let container = document.querySelector('.contenedor')
        let contenido =
        `<article class= "contenedor"> 
        <p class = "texto"> <u>Titulo</u>: ${data.name} </p>
        <img class = "fotoriverdale" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt='' /> 
        <p class = "texto"> <u>Fecha de estreno</u>: ${data.first_air_date} </p>
        <p class = "texto" > <u>Calificación</u>: ${data.vote_average} </p>
        <p class = "texto" > <u>Sinópsis</u>: ${data.overview} </p>
        </article>`;
        container.innerHTML += contenido
    })


    .catch(function (error) {
        console.log(error);

    })


     // FAVS
let favoritos = [];

let recuperoStorage = localStorage.getItem('series_favoritas'); 

if (recuperoStorage != null) {
    
    favoritos = JSON.parse(recuperoStorage);
}


let fav = document.querySelector('.boton2');

// Chequear que id este en el array de favoritos 
if (favoritos.includes(id)) {
    fav.innerText = "Quitar de favoritos"
}

fav.addEventListener('click', function (evento) {
    evento.preventDefault();

    if (favoritos.includes(id)) {
        // Si el id esta en el array
        let indice = favoritos.indexOf(id);

        //Borrar a partir del indice 1 elemento 
        favoritos.splice(indice, 1)
        fav.innerText = "Agregar a favoritos"
    }

    else { // Guardar dato en un array: agregar un dato al array 
        favoritos.push(id);
        fav.innerText = "Quitar de favoritos";
    }

    // Guardar el array en el storage (esto se hace pase lo que pase, no se mete en el else)
    let favsToString = JSON.stringify(favoritos); // Transformamos el array en una cadena de texto

    localStorage.setItem("series_favoritas", favsToString);

    console.log(localStorage);

})

url2 =  `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=15370bef1a25ea674deaaf70270ad202`
fetch(url2)
    .then(function(response){
        return response.json()
    })
    .then (function(data){
        console.log(data);
        let Container= document.querySelector('.detmovie1');
        let contenido= 
        `<article href>
        <h2>${data.title}</h2>
        <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="">
        <h4 style="color: white" > Estreno: ${data.release_date} </h4>
        <h4 style="color: white"> Idioma original: ${data.original_language} </h4>
        <h4 style="color: white"> Puntuación: ${data.vote_average} </h4>
        <h4 style="color: white"> Resumen: ${data.overview}
        </article>`;


       Container.innerHTML += contenido
    })

    .catch(function(error){
        console.log(error);
 })   
 

// favoritos

let favoritos1=[]



let storageRecuperado = localStorage.getItem('pelisfavs');
    if (storageRecuperado != null){
        favoritos1 = JSON.parse(storageRecuperado);
        console.log(favoritos);
    }
let boton = document.querySelector('.boton2');   


if (favoritos1.includes(id)){
     boton.innerText="sacar de favoritos"
    };

boton.addEventListener('click', function(){
   

    if (favoritos1.includes(id)){
        let indicePelicula = favoritos1.indexOf(id);
        favoritos1.splice(indicePelicula, 1)
        boton.innerText="agregar a favoritos"; 
    } else{
    // guardar el id de pelicula en el array
        favoritos1.push(id);
        boton.innerText= 'quitar de favoritos';
    }
  
    // Guardar datos en local storage
    let favsTostring = JSON.stringify(favoritos1)
    localStorage.setItem('pelisfavs', favsTostring)
    console.log(localStorage);
});
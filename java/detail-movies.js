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

let qsString = location.search
let qs2 = new URLSearchParams(qsString)
//qs2 = {id= 43270}
let id = qs2.get("id")
console.log(id);


let urldetmov = `https://api.themoviedb.org/3/movie/${id}?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US`




fetch(urldetmov)
    .then(function(response){
        return response.json()
    })
    .then (function(data){
        console.log(data);
        let bContainer= document.querySelector('.detmovie1');
        let contenidoT= 
        `<article href>
        <h2>${data.title}</h2>
        <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="">
        <h4 style="color: white" > Estreno: ${data.release_date} </h4>
        <h4 style="color: white"> Idioma original: ${data.original_language} </h4>
        <h4 style="color: white"> Puntuación: ${data.vote_average} </h4>
        <h4 style="color: white"> Resumen: ${data.overview}
        </article>`;


       bContainer.innerHTML += contenidoT
    })

    .catch(function(error){
        console.log(error);
 })   
 

// favoritos
let favoritos=[]

//  si ya hay favoritos

let storageRecuperado = localStorage.getItem('pelisfavs');
    if (storageRecuperado != null){
        favoritos = JSON.parse(storageRecuperado);
        console.log(favoritos);
    }
let boton = document.querySelector('.boton2');   

//si el id esta en el array cambiamos el texto del boton
if (favoritos.includes(id)){
     boton.innerText="sacar de favoritos"
    };

boton.addEventListener('click', function(){
    // chequear si el id ya esta lista y cambiar el texto del boton

    if (favoritos.includes(id)){
        let indicePelicula = favoritos.indexOf(id);
        favoritos.splice(indicePelicula, 1)
        boton.innerText="agregar a favoritos"; 
    } else{
    // guardar el id de pelicula en el array
        favoritos.push(id);
        boton.innerText= 'quitar de favoritos';
    }
  
    // Guardar datos en local storage
    let favsTostring = JSON.stringify(favoritos)
    localStorage.setItem('pelisfavs', favsTostring)
    console.log(localStorage);
});

 




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
let query2 = new URLSearchParams(qsString)
let id = query2.get("id")
console.log(id);


let urldetmov = `https://api.themoviedb.org/3/movie/${id}?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US`




fetch(urldetmov)
    .then(function(response){
        return response.json()
    })
    .then (function(data){
        console.log(data);
        let Container= document.querySelector('.detmovie1');
        let contenido= 
        `<article href>
        <h2 style="color: white"> <u> ${data.title} </u></h2>
        <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="">
        <h4 style="color: white" > <u> Estreno: </u> ${data.release_date} </h4>
        <h4 style="color: white"> <u>Idioma original: </u> ${data.original_language} </h4>
        <h4 style="color: white"> <u>Puntuación: </u> ${data.vote_average} </h4>
        <h4 style="color: white"> <u>Resumen: </u> ${data.overview} </h4>
        </article>`;


       Container.innerHTML += contenido
    })

    .catch(function(error){
        console.log(error);
 })   
 

// Favoritos
let favoritos=[]


let storageRecuperado = localStorage.getItem('pelisfavs');
    if (storageRecuperado != null){
        favoritos = JSON.parse(storageRecuperado);
        console.log(favoritos);
    }
let boton = document.querySelector('.boton2');   

if (favoritos.includes(id)){
     boton.innerText="sacar de favoritos"
    };

boton.addEventListener('click', function(){
    // Chequeamos si el id ya esta lista y cambiar el texto del boton

    if (favoritos.includes(id)){
        let indicePelicula = favoritos.indexOf(id);
        favoritos.splice(indicePelicula, 1)
        boton.innerText="agregar a favoritos"; 
    } else{
    // Guardamos el id de pelicula en el array
        favoritos.push(id);
        boton.innerText= 'quitar de favoritos';
    }
  
    // Guardamos datos en local storage
    let favsTostring = JSON.stringify(favoritos)
    localStorage.setItem('pelisfavs', favsTostring)
    console.log(localStorage);
});

//reviews

let qString = location.search
let query3 = new URLSearchParams(qString)
let movieid = query3.get("id")
console.log(movieid);
let urlreviews = `https://api.themoviedb.org/3/movie/${movieid}/reviews?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&page=1`

fetch (urlreviews)
    .then (function (response){
        return response.json ()
    })
    . then (function (data){
        console.log (data);

        let reviewcontainer = document.querySelector (".reseña")
            .then (function(data){
                console.log(data);
                let contenidor= 
                `<article class= "reviews">
                <h4 style="color: white" > <u>  Autor: </u> ${data[i].author} </h4>
                <h4 style="color: white" > <u>  Comentario: ${data[i].content} </h4>
       
        </article>`;
        reviewcontainer.innerHTML += contenidor

        }
        .catch(function(error){
            console.log(error);
     })   
     
            )})
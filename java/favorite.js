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
let storageRecuperado = localStorage.getItem('pelisfavs');
let peliculas = JSON.parse(storageRecuperado);
let favoritos = document.querySelector(".favoritos");

if (peliculas == null || peliculas.length == 0 ){
    favoritos.innerHTML = `<p>No hay favoritos seleccionados</p>`
}else{
    for (let i = 0 ; i < peliculas.length; i++){
        buscarymostrarfavoritos(peliculas[i])
    }
}

function buscarymostrarfavoritos(id){
    let urldetmov = `https://api.themoviedb.org/3/movie/${id}?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US`
    let url2=`https://api.themoviedb.org/3/tv/${id}?api_key=c71f5b75c8e3c6372967558c16ff597f`

    fetch(urldetmov)
        .then(function(res){
         return res.json()
    })
    .then(function(data){
        console.log(data);
        favoritos.innerHTML += `
        <a href="./detail-movie.html?id=${data.id}">
            <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="">
            <h2>${data.title}</h2>
        </a>        
        ` 

    })
  

     
fetch(url2)
.then(function(res){
 return res.json()
})
.then(function(data){
console.log(data);
favoritos.innerHTML += `
<a href="./detail-serie.html?id=${data.id}">
    <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="">
    <h2>${data.name}</h2>
</a>        
` 

})

.catch(function(error){
console.log(error);
})
}  


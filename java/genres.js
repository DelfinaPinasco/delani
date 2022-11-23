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
else if (campo.value.lenght < 3){
    aviso.innerText = 'Debe ingresar más caracteres';
    campo.style.outline = '2px solid red'
    aviso.style.color = 'red'
}
else {
    this.submit()
}
})


let section = document.querySelector('.section')
fetch ("https://api.themoviedb.org/3/genre/movie/list?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US"
)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data);
        let generos = data.genres;
    for(let i=0; i<generos.length; i++){
	        	section.innerHTML += `         
<ul>

<a href="detail-genres.html?id=${generos[i].id}">${generos[i].name}</a>

</ul>`
    }
        
})
.catch (error => console.log(error))


 
let generoPelicula = document.querySelector('.section-movies')
fetch ("https://api.themoviedb.org/3/genre/movie/list?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US"
)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data);
        let generos = data;
    for(let i=0; i<generos.length; i++){
	        	generoPelicula.innerHTML += `         
<ul>
<li>
<a href="detail-genres.html?id=${generos[i].id}">${generos[i].name}</a>
</li>
</ul>`
    }
        
})
.catch (error => console.log(error))

let sectionseries = document.querySelector('.section-series')

fetch ("https://api.themoviedb.org/3/genre/tv/list?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US")
.then(function(res) {
    return res.json();
})
.then (function(data) {
    console.log(data);
        let generosDos = data;
    for(let i=0; i<generosDos.length; i++) {
        `       generoSerie.innerHTML += 					
    <ul>
    <li>
    <a href="detail-genres.html?id=${generosDos[i].id}">${generosDos[i].name}</a>
    </li>
    </ul>`
        }
})
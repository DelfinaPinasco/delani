<<<<<<< HEAD

let apikey = "15370bef1a25ea674deaaf70270ad202"
let url = `https://api.themoviedb.org/3/movie/{movie_id}?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US`
let generoPelicula = document.querySelector('.section-movies')

fetch (url)
=======
let generoPelicula = document.querySelector('.section-movies')

fetch ("https://api.themoviedb.org/3/movie/{movie_id}?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US"
)
.then(function(res) {
    return res.json();
})
>>>>>>> 4d58290fc3ec549c2db31b6eaec6303725c891e2
.then(function(data) {
    console.log(data);
        let generos = data;

    for(let i=0; i<generos.length; i++){
<<<<<<< HEAD
		generoPelicula.innerHTML += `
							
    <ul>
    <li>
    <a href="detail-genres.html?id=${generos[i].id}">${generos[i].name}</a>
    </li>
    </ul>`
        }
=======
	        	generoPelicula.innerHTML += `
				
                
<ul>

<li>

<a href="detail-genres.html?id=${generos[i].id}">${generos[i].name}</a>

</li>

</ul>`
    }
>>>>>>> 4d58290fc3ec549c2db31b6eaec6303725c891e2
        
})
.catch (error => console.log(error))


let sectionseries = document.querySelector('.section-series')

fetch (url)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data);
        let generosDos = data;
    for(let i=0; i<generosDos.length; i++){
        `       generoSerie.innerHTML += `
							
<ul>

<li>

<a href="detail-genres.html?id=${generosDos[i].id}">${generosDos[i].name}</a>

</li>
<<<<<<< HEAD
</ul>`    
}
=======

</ul>`    
    }
>>>>>>> 4d58290fc3ec549c2db31b6eaec6303725c891e2
        

})

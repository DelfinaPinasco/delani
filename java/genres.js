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


let detailgenre = window.location.search;
let genres = new URLSearchParams(detailgenre);
let id = genres.get('id');
console.log(id)

let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US`

fetch (url)
.then (function (respuesta) {
    console.log(respuesta);
}
    

    
)
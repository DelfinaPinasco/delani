let apikey = "15370bef1a25ea674deaaf70270ad202"
let url = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US"

fetch (url)
    .then(function(res) {
    return res.json();
    })
    .then(function(data) { 
    console.log(data);// hay que seguir con esto
    let info = data.results
    let contenido = "";


for (let index = 0; index < info.length; index++) /* i++ se va iterando */ 
    contenido+= 
    `<img class = "fotofast" src= "https://image.tmdb.org/t/p/w500${info[index].poster_path}" alt='' /> 
    <h1>${info[index].title}</h1>
    <p class = "estreno"> Fecha de estreno: ${info[index].release_date} </p>
    <p class = "calificacion" > ${info[index].vote_avarage} </p>
`


})

.catch(function(error){
    console.log('El error es' + error);
    return error
})
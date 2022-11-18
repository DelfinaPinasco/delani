let query1 = location.search
let query2 = new URLSearchParams (query1)
let search = query2.get("search")

let results = this.document.querySelector(".results")
results.innerHTML += `Resultados para: ${search}`

fetch (`https://api.themoviedb.org/3/search/movie?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&query=${search}&page=1&include_adult=false`)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data);
    let searchResults = document.querySelector(".results");
    let container = document.querySelector(".container")
    if (data.results.length == 0){
        searchResults.innerHTML += `La busqueda ${search} no dio ningun resultado`
    }
  else{
    for (let i=0; i<data.results.length; i++){

    }
}


})
.catch(function(error){
    console.log('El error es' + error);
    return error
})
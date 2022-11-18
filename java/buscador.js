let query1 = location.search
let query2 = new URLSearchParams (query1)
let search = query2.get("search")

let results = this.document.querySelector(".results")
results.innerHTML += `Resultados para: $(search)`

fetch ("https://api.themoviedb.org/3/movie/{movie_id}?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US")
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data);
    let searchResults = document.querySelector(".results");
    let container = document.querySelector(".container_search")
    if (data.results.length == 0){
        searchResults.innerHTML += `;a busqueda ${search} no dio ningun resultado`
    }
    /* tengo que modificar un poco arriba y seguir aca
    else
    for
     */

})
.catch(function(error){
    console.log('El error es' + error);
    return error
})
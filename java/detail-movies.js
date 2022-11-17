let query1 = location.search
console.log (query1);
let query2 = new URLSearchParams(query1)
console.log(query2)
let id = query2.get("id");
console.log(id);

let apikey = "15370bef1a25ea674deaaf70270ad202"
let url = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US"

fetch (url)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data);
})
.catch(function(error){
    console.log('El error es' + error);
    return error
})
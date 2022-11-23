let campo = document.querySelector('.search')
let aviso = document.querySelector('.textooo')
let formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(evento){  
    evento.preventDefault()
    console.log("Error")
if (campo.value == "") {
    aviso.innerText = 'El campo no puede estar vacío';
    campo.style.outline = '2px solid red'
    aviso.style.color = 'red'
}
else if (campo.value.length <= 3){
    aviso.innerText = 'Debe ingresar más caracteres';
    campo.style.outline = '2px solid red'
    aviso.style.color = 'red'
}
else {
    this.submit()
}
})

let query1 = location.search
console.log(query1);
let query2 = new URLSearchParams (query1)
let search = query2.get("search")
console.log(search);

let results = this.document.querySelector(".results")
results.innerHTML += `Resultados para: ${search}`
let url = "https://api.themoviedb.org/3/search/movie?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&query=${search}&page=1&include_adult=false"
fetch (url)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data);
    let searchResults = document.querySelector(".results");
    for (let i=0; i<data.results.length; i++){
        if (searchResults[i].media_type == "tv"){
            results.innerHTML += '<li>'
        }}

})
.catch(function(error){
    console.log('El error es' + error);
    return error
})
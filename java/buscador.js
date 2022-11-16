/* let buscador = document.querySelector (".buscador");
let formulario = document.querySelector ("form");
<<<<<<< HEAD
let campoAEvaluar = document.querySelector ("[name='q']") */

let url ('https://api.themoviedb.org/3/authentication/token/new?api_key=15370bef1a25ea674deaaf70270ad202')
fetch
=======
let campoAEvaluar = document.querySelector ("[name='q']")


function buscarYMostrarFavoritos (id){
    //fetch
    let url = `https://rickandmortyapi.com/api/character/${id}`

    fetch (url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            lista.innerHTML += `<article>
                            <img src="${data.image}">
                            <p> Nombre: ${data.name}</p>
                            
                            </article>`
        })
        .catch (function(e){
            console.log(e);
        })
    }
>>>>>>> c41c1cc21d946edccb06185fbb79f7af88d80aca

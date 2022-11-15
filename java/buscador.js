let buscador = document.querySelector (".buscador");
let formulario = document.querySelector ("form");
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

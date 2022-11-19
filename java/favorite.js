let queryString = location.search; //Obtengo la QS
let queryStringToObject = new URLSearchParams(queryString); //La trasnformo en OL
let id = queryStringToObject.get('id'); //Obtengo los datos de una propiedad con get()


let url = `https://api.themoviedb.org/3/account/%7Baccount_id%7D/favorite/movies${id}?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&sort_by=created_at.asc&page=1`

console.log(url);




// cuando se pulsa en "agregar a favoritos"
document.getElementById(".favoritos").addEventListener("click", function(e) {
    //los guardamos en un objeto
  var datos = {
    id: document.getElementById("producto-id").value,
    nombre: document.getElementById("producto-nombre").textContent,
    url: document.location.href
  };
    // leemos los favoritos del localStorage
  var favoritos = localStorage.getItem("favoritos") || "[]";
  favoritos = JSON.parse(favoritos);

   // buscamos el producto en la lista de favoritos
   var posLista = favoritos.findIndex(function(e) { return e.id == datos.id; });
   if (posLista > -1) {
     // si está, lo quitamos
     favoritos.splice(posLista, 1);
   } else {
     // si no está, lo añadimos
     favoritos.push(datos);
   }
 
   // guardamos la lista de favoritos 
   localStorage.setItem("favoritos", JSON.stringify(favoritos));
 
 });

/* fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        //Capturamos DOM
        let section = document.querySelector('.detalle')

        section.innerHTML += `<article>
                                <h2>Nombre: ${data.name}</h2>
                                <img src="${data.image}">
                                <p> Status: ${data.status}</p>
                                <p> Especie: ${data.species}</p>
                                <p> Genero: ${data.gender}</p>
                            </article>`   
    })
    .catch(function(error){
        console.log(error);
    })

// 1 - crear un array para ir completando con datos
let favoritos = [];

// 2 - recupero datos del storage
let recuperoStorage= localStorage.getItem("favoritos"); */
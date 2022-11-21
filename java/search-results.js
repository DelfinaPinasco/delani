let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("q");
let apiKey = "15370bef1a25ea674deaaf70270ad202"
let urlm = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${busqueda}&page=1&include_adult=false`
let urls = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=1&query=${busqueda}&include_adult=false`
fetch(urlm)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let tituloBusqueda = document.querySelector(".textoprinci")


        if (data.results.length == "") {
            tituloBusqueda.innerText= `No se ha encontrado resultado de busqueda para: ${busqueda}` //crear una alert
        }
        else {
            tituloBusqueda.innerText = `Resultado de busqueda para: ${busqueda}`
        }
        let srul = document.querySelector(".resultados")
        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
            srul.innerHTML += `<article>
                <a href="detail-movie.html?id=${element.id}"><img src="https://image.tmdb.org/t/p/w500${element.poster_path}"/></a>
                <p>${element.title}</p>
                <p>${element.release_date}</p>      
           </article>`  
        }
        
    })   
   .catch(function (error) {
        console.log(error);
    })

fetch(urls)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let tituloBusqueda = document.querySelector(".textoprinci")


        if (data.results.length == 0) {
            tituloBusqueda.innerText = `No se a encontrado resultado de busqueda para: ${busqueda}`
        }
        else {
            tituloBusqueda.innerText = `Resultado de busqueda para: ${busqueda}`
        }
        let srul = document.querySelector(".resultados")
        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
            srul.innerHTML += `<article>
                <a href="detail-series.html?id=${element.id}"><img src="https://image.tmdb.org/t/p/w500${element.poster_path}"/></a>
                <p>${element.name}</p>
                <p>${element.first_air_date}</p>      
           </article>`  
        }
    })

    .catch(function (error) {
        console.log(error);
    })
let queryString = window.location.search;
console.log(queryString);
let queryObject = new URLSearchParams(queryString)
let search = queryObject.get('search');
console.log(search);

let url = `https://api.themoviedb.org/3/search/multi?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&query=${search}&page=1&include_adult=false`



let resultados = document.querySelector('.resultados')



fetch(url)
    .then(function (respuestas) {
        return respuestas.json()
    })

    .then(function (data) {
        console.log(data);
        let info = data.results;

        for (let i = 0; i < info.length; i++) {
            if (info[i].media_type == "tv") {
                /* resultados.innerHTML += `<li>Serie: ${info[i].original_name}</li>` */
                resultados.innerHTML += `<li>
                                        <a href="detail-serie.html?id=${info[i].id}">
                                            <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="">
                                            <h3>Título: ${info[index].title} </h3>
                                         </a>
                                    </li>`;
                                    info.innerHTML += contenido
            
            }}
        } )

        .catch(function (error) {
            console.log(error);
    
        })

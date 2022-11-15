let url = 'https://api.themoviedb.org/3/movie/550?api_key=15370bef1a25ea674deaaf70270ad202'

/*  cambiar la data
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let info = data.results
        let container = document.querySelector('.characterList');
        let characters = '';

        for(let i=0; i<info.length; i++){
            characters += `<article>
                                <img src=${info[i].image} alt='' />
                                <a href='detalle.html?id=${info[i].id}'><p>Name: ${info[i].name}</p></a>
                                <p>Status: ${info[i].status} </p>
                            </article>`
        }
        
        container.innerHTML = characters;

        
    })
    .catch(function(error){
        console.log(error);
    })
    */
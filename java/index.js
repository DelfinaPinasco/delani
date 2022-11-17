
/* para que aparezcan la division por section, cada una con su url y selector */
let apiKey = "15370bef1a25ea674deaaf70270ad202a"

let priurl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
let prisection= document.querySelector(".peliculaspopulares")

let segurl = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
let segsection= document.querySelector(".seriespopulares")

let terurl = `https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US`
let tersection= document.querySelector(".peliculasnuevas")

/*cada section tiene un url y un fetch propio*/


//prisection

fetch(priurl)
.then(function(respuesta) {
    return respuesta.json();
})
.then(function(data) {
    console.log(data);
    let okey = ""
    for (let index = 0; index < 5; index++) {
        const element = data[index];
        okey+=`<article class= cartelera>
        <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt='imagen' />
         <p>Título:${element.title}</p>
         <p>Fecha de estreno: ${element.release_date} </p>
        </article>`
    }
    prisection.innerHTML = okey
    return data
})
.catch(function(error){
    console.log('El error es' + error);
    return error
})
    
//segsection

fetch(segurl)
.then(function(respuesta) {
    return respuesta.json();
})
.then(function(data) {
    console.log(data);
    let okey = ""
    for (let index = 0; index < 5; index++) {
        const element = data[index];
        okey+=`<article class= cartelera>
        <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt='imagen' />
        <p>Título:${element.title}</p>
        <p>Fecha de estreno: ${element.release_date} </p>
       </article>`
    }
    section1.innerHTML = okey
})
.catch(function(error){
    console.log('El error es' + error);
    return error
})

//tersection
fetch(terurl)
.then(function(respuesta) {
    return respuesta.json();
})
.then(function(data) {
    console.log(data);
    let okey = ""
    for (let index = 0; index < 5; index++) {
        const element = data[index];
        okey+=`<article class= cartelera>
        <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt='imagen' />
         <p>Título:${element.title}</p>
         <p>Fecha de estreno: ${element.release_date} </p>
        </article>`
    }
    tersection.innerHTML = okey
})
.catch(function(error){
    console.log('El error es' + error);
    return error
})
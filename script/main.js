import { ApiFecth,ApiFecthImg } from "./entities/Api.js"




const cardMovie = document.getElementById('movies-card')
const btn = document.getElementById('btn')
const p = document.createElement('p')
const img = document.createElement('img')







//Função de que bsucar da api os detalhe do filme
btn.addEventListener('click', async()=>{
   const  movie = await  ApiFecth()
   const imgFecth = await ApiFecthImg()
   img.src = imgFecth
    p.innerHTML = `

        Titulo do Filme: ${movie.Title}
        <br>
        Gênero: ${movie.Genre}
        <br>
        Lançamento: ${movie.Year}
        <br>
        Tempo de Duração: ${movie.Runtime}

    `
    cardMovie.appendChild(img)
    cardMovie.appendChild(p)

})


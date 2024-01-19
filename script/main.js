import { ApiFecth,ApiFecthImg,dataMovieHistory } from "./entities/Api.js"

const cardMovie = document.getElementById('movies-card')
const btn = document.getElementById('btn')
const ul = document.createElement('ul')
const imgDetails = document.createElement('img')

//Função de que buscar da api os detalhe do filme
btn.addEventListener('click', async()=>{
   const  movie = await  ApiFecth()
   const imgFecth = await ApiFecthImg()
   imgDetails.src = imgFecth
   imgDetails.alt = `${movie.Title}`
   imgDetails.classList.add('styleImgDOM')
   ul.classList.add('styleListDOM')
    ul.innerHTML = `

        <li> Titulo: ${movie.Title} </li>
        <br>
        <li> Rank: ${movie.imdbRating} </li>
        <br>
        <li> Gênero: ${movie.Genre} </li>
        <br>
        <li> Lançamento: ${movie.Year} </li>
        <br>
        <li> Tempo de Duração: ${movie.Runtime} </li>
        <br>
        <li> Idioma Oficial: ${movie.Language} </li>
        <br>
        <li> Dirigido e Escrito: ${movie.Writer} </li>
        <br>
        <li> Sinopse: ${movie.Plot} </li>
    `
    imgDetails.alt ="Imagem inválida"
    cardMovie.appendChild(imgDetails)
    cardMovie.appendChild(ul)

})




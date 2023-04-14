import { ApiFecth,ApiFecthImg } from "./entities/Api.js"




const cardMovie = document.getElementById('movies-card')
const btn = document.getElementById('btn')
const ul = document.createElement('ul')
const img = document.createElement('img')







//Função de que buscar da api os detalhe do filme
btn.addEventListener('click', async()=>{
   const  movie = await  ApiFecth()
   const imgFecth = await ApiFecthImg()
   img.src = imgFecth
   img.alt = `${movie.Title}`
   img.classList.add('styleImgDOM')
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
    
    cardMovie.appendChild(img)
    cardMovie.appendChild(ul)

})



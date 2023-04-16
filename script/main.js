import { ApiFecth,ApiFecthImg,dataMovieHistory } from "./entities/Api.js"




const cardMovie = document.getElementById('movies-card')
const btn = document.getElementById('btn')
const ul = document.createElement('ul')
const imgDetails = document.createElement('img')
const slide = document.getElementById('slide')
const img1 = document.createElement('img')
const img2 = document.createElement('img')
const img3 = document.createElement('img')
const img4 = document.createElement('img')
const img5 = document.createElement('img')
const h1 = document.createElement('h1')









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
    if(dataMovieHistory.length >= 6){
        dataMovieHistory.shift()
       
    }
    if(dataMovieHistory.length >= 0){
        h1.innerHTML = "Histórico"

        slide.appendChild(h1)
    }
      
     dataMovieHistory.length>=0?img1.src=dataMovieHistory[0]: img1.alt =''
     dataMovieHistory.length>=2?img2.src=dataMovieHistory[1]: img2.alt =''
     dataMovieHistory.length>=3?img3.src=dataMovieHistory[2]: img3.alt =''
     dataMovieHistory.length>=4?img4.src=dataMovieHistory[3]: img4.alt =''
     dataMovieHistory.length>=5?img5.src=dataMovieHistory[4]: img5.alt =''
   
   
      

      

    slide.appendChild(img1)
    slide.appendChild(img2)
    slide.appendChild(img3)
    slide.appendChild(img4)
    slide.appendChild(img5)
    cardMovie.appendChild(imgDetails)
    cardMovie.appendChild(ul)

})




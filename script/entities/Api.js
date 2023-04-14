

let waitSearchInput = ''
const inputSearch = document.getElementById('search')
let urlTitle = ''
const urlAll = 'http://www.omdbapi.com/?apikey=e92f4f42&i=tt0266697' 

inputSearch.addEventListener('change', async (event)=>{
    waitSearchInput = await event.target.value
    urlTitle = await  `http://www.omdbapi.com/?apikey=e92f4f42&t=${waitSearchInput}`
    console.log(waitSearchInput)
})



 export const dataMovieHistory = []

export  const  ApiFecth = async () => {
    const url = await fetch(urlTitle)
    const date = await url.json()
    console.log(date)
    console.log(urlTitle)
    return date
}

  export const ApiFecthImg = async () => {
    const url = await fetch(urlTitle)
    const date = await url.json()
    const img = await date.Poster
    console.log(img)
      dataMovieHistory.push(img)
    
    return img
}       
 

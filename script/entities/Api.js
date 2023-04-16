

let waitSearchInput = ''
const inputSearch = document.getElementById('search')
let urlTitle = ''


inputSearch.addEventListener('change', async (event)=>{
    waitSearchInput = await event.target.value
    urlTitle = await  `http://www.omdbapi.com/?apikey=e92f4f42&t=${waitSearchInput}`
    
})



 export const dataMovieHistory = []

export  const  ApiFecth = async () => {
    const url = await fetch(urlTitle)
    const date = await url.json()
   
    return date
}

  export const ApiFecthImg = async () => {
    const url = await fetch(urlTitle)
    const date = await url.json()
    const img = await date.Poster
    dataMovieHistory.push(...[img])
     
    return img
    
}       



 

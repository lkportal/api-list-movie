const urlAll = 'http://www.omdbapi.com/?apikey=e92f4f42&i=tt0266697' 

export  const  ApiFecth = async () => {
    const url = await fetch(urlAll)
    const date = await url.json()
    
    return date
}
export const ApiFecthImg = async () => {
    const url = await fetch(urlAll)
    const date = await url.json()
    const img = date.Poster
    return img
}    

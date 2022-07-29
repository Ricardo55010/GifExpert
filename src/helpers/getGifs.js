export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=xf029iJevDcOR2HQVg7fXKyL3vEpPM6i&q=${category}&limit=20`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => ({
        id:img.id,
        title: img.title,
        url: img.images.downsized_medium.url
        })
    )
    return gifs;
} //la buena practica es sacar la funcion del componente y dejarla en un js aparte tal como hicimos ahora
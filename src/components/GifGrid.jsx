import React,{useEffect,useState} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'


export const GifGrid = ({category}) => {
    //lo de abajo es pesima practica 
    // const getGifs = async() => {
    //     const url = `https://api.giphy.com/v1/gifs/search?api_key=xf029iJevDcOR2HQVg7fXKyL3vEpPM6i&q=${category}&limit=20`
    //     const resp = await fetch(url);
    //     const {data} = await resp.json();
    //     const gifs = data.map(img => ({
    //         id:img.id,
    //         title: img.title,
    //         url: img.images.downsized_medium.url
    //         })
    //     )

    //     console.log(gifs);
    // }
    
    const {images,isLoading} = useFetchGifs(category)
    
    return (
    <>
    <h3>{category}</h3>
    {
        isLoading && (<h2>Cargando....</h2>)
    }
    <div className='card-grid'>
        {images.map((img)=>{
            return  <GifGridItem key={img.id} {...img}/>//<li key={img.id}>{img.title}</li>
        })}
    </div>
    </>
  )
}

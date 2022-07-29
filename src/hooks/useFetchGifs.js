import React,{useState,useEffect} from 'react'
import { getGifs } from '../helpers/getGifs'
//uun hook no es mas que una funcion que regres algo
export const useFetchGifs = (category) => {
    const  [images, setImages] = useState([]);
    const  [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getGifs(category).then(img=>setImages(img));
        setIsLoading(false);
    }, [])
    return {
    images: images,
    isLoading: isLoading // o solo isLoading porque se llaman igual
  }
}

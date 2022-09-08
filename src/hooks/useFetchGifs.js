import { useState, useEffect } from "react";

import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {              //getGifs solo se llamará la primera vez, 
        getImages();                //cuando se cree el componente
    }, [] ); 

    return {
        images,                     //retorna las images y isLoading
        isLoading
    }
}

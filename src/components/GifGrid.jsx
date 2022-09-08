import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( {category} ) => {     

    const {images, isLoading} = useFetchGifs(category);
                                                        
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Cargando...</h2>) //Si es loading = true va a mostrar la etiqueta, sino no se crea
            }

            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem key= {image.id} 
                        {...image }/>       //Esparce las propiedades de imagen
                    ))   
                }
            </div>
        </>
    )
}

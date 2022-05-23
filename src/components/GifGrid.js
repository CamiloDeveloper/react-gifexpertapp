// import React, { useEffect, useState } from 'react'
import React from 'react'

import { getGifts } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {


    // const [images, setImages] = useState([])
    // //esto es para ejecutar la funcion getGifts solo la primera vez que se renderice el componente
    // useEffect( () => {
    //     getGifts( category ).then( setImages )
    // }, [])


    const {data: images, loading} = useFetchGifs(category);

 
 


  return (
        
        <>
            <h3> { category } </h3>


            { loading && <p>Loading...</p>  }


            <div className='card-grid'>

            
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            

        </div>
        
        </>
  )
}



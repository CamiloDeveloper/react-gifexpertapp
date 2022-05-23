import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGifs";



export const useFetchGifs = ( category ) => {
  

    const [state, setState] = useState({
        data: [],
        loading: true
    });

     useEffect( () => {

        setTimeout( () =>{
            getGifts( category ).then( imgs => {

         
                setState({
                    data: imgs,
                    loading: false
                });
            } );

        },2000)
         

    }, [category])


    return state;


}

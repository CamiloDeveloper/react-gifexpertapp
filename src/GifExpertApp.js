

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch Man']);

  const handleAdd = () => {
    // Forma 1
    // setCategories( [...categories, 'Zodiaco'] );
    // Forma2, setCategories recibe un callBack que trae el valor del estado anterior
    setCategories( cats => [...cats, 'Zodiaco'] );


  }


  return (
    <>
        <h2>GifExpertApp</h2>

        <AddCategory setCategories= { setCategories } />
        <hr />

        <ol>
          { 
            categories.map( category => ( 
              <GifGrid  
                key={category}
                category={category} 
              />
            )) 
          }
        </ol>

    </>
  )
}



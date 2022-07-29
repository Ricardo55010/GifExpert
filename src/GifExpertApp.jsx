import React,{useState} from 'react'  //esto no es necesario actualmente, despues de la version 17
//usestate se debe importar de afuerzas

//Gracias al archivo de barril llamado .js:
import {AddCategory,GifGrid} from './components'
//import {AddCategory} from './components/AddCategory'
//import { GifGrid } from './components/GifGrid'
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Redfield'])
  //console.log(categories)
  const onAddCategory= (newCategory) => {
    // console.log(categories)
    // categories.push("Itsuki")esto no nos sirve para cambiar el estado porque muta el objeto y es algo que queremos evitar
    // console.log(categories)
    if(categories.includes(newCategory)){
      return;
    }
    console.log(newCategory)

    setCategories([newCategory,...categories])
  }
    return (
    
    <>
    {/* Titulo */}
    <h1>GifExpertApp</h1>
    {/* input */}
    <AddCategory //setCategories={setCategories} mandamos referencia a funcion setCategories
    onNewCategory= {onAddCategory}
    />
    {/* listado de gif */}
    {/* <button onClick={onAddCategory}>Agregar</button> */}

    {categories.map(category=>
        <GifGrid key={category} category={category}/>
    )
    } {/* .map es propio de los arreglos y esto nos permitiría crear un elemento de la lista por cada elemento del arreglo */}
    {/* <li></li> */}

    {/* gif item */}
    </>
    
      
  )
}

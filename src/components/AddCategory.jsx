import React,{useState} from 'react'

export const AddCategory = ({onNewCategory}) => {
    
  const [inputValue, setInputValue] = useState("")
    const onInputChange = (event) => {
        console.log(event.target.value)
        setInputValue(event.target.value)
    }
    const onSubmit=  (event) =>{
        event.preventDefault()//evita el refresh del navegador
        if(inputValue.trim().length<=1){
          return ;
        }
       // console.log(inputValue)
       //setCategories(categories=>[...categories,inputValue])
       onNewCategory(inputValue.trim());
       setInputValue('') //vacía nuestro input despues del enter
    }
  return (
    <form onSubmit={(event) =>onSubmit(event)}>
    <input type="text" placeholder='Buscar gifs' value={inputValue}
    onChange={onInputChange}/>
    </form>
     //onChange={(event)=>onInputChange(event
  )
}

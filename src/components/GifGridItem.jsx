import React from 'react'

export const GifGridItem = ({title,url}) => {
    // console.log(title)
     console.log(url)
  return (
    <div className='card'>
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}
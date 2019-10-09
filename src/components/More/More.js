import React, { useState, useEffect } from 'react'
import './more.scss'

function More(){

  const [ items, setItems ] = useState(false)

  useEffect(()=>{

  })

  return(
    <>

      <button onClick={ setItems() } className='more'>+</button>
      
      <ul>
        <li><a href='a'>item 1</a></li>
        <li><a href='a'>item 2</a></li>
        <li><a href='a'>item 3</a></li>
      </ul>

    </>
  )
}

export default More


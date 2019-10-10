import React, { useState } from 'react'
import './more.scss'

function More(){

  const [ items, setItems ] = useState('listNone')

    function moreItems() {
      setItems('listBlock')
    }

  return(
    <div className='moreDiv'>
      <button onClick={moreItems} className='more'>+</button>
       <ul className={ items }>  
        <li><a href='a'>item 1</a></li>
        <li><a href='a'>item 2</a></li>
        <li><a href='a'>item 3</a></li>
      </ul>
    </div>
  )
}

export default More

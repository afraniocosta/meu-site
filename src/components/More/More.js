import React, { useState } from 'react'
import './more.scss'

function More(){

  const [showItems, setShowItems] = useState(false);


  return(
    <div className='moreDiv'>
      <button onClick={() => setShowItems(!showItems)}> + </button>
      {showItems && 
        <div>
          <ul>  
            <li><a href='a'>item 1</a></li>
            <li><a href='a'>item 2</a></li>
            <li><a href='a'>item 3</a></li>
          </ul>
        </div>}
    </div>
  )
}
// https://www.chrisblakely.dev/how-to-show-hide-elements-in-react-using-hooks/
export default More



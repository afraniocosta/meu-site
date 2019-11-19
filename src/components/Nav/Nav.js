import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.scss'

function Nav() {

const [showNav, setShowNav] = useState(false); 

return(
  <div className="navhome">
    <button for="navicon" class="btn-hamburger" onClick={() => setShowNav(!showNav)}>
      <div></div>
      <div></div>
      <div></div>
    </button>
    { showNav && 
    <nav> 
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>  
          <Link to="/sobre">sobre mim</Link>
        </li>
        <li>  
          <Link to="/portfolio">portfolio</Link>
        </li>
      </ul>
    </nav> }
  </div>
)

}  

export default Nav;    
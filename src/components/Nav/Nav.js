import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './nav.scss'

function Nav() {

const [showNav, setShowNav] = useState(false); 
const isMobile = window.innerWidth <= 768

// useEffect((showNav)=>{
//   if(!isMobile) {
//     showNav = useState(true);
//   }
// })

return(
  <div className="navhome mr-3">
    {isMobile ?
    <button for="navicon" class="btn-hamburger" onClick={() => setShowNav(!showNav)}>
      <div className='navOne'></div>
      <div className='navTwo'></div>
      <div className='navThree'></div>
    </button> : ''}
    { showNav || !isMobile ? // se showNav for true ou estiver no desktop exibe nav. Era showNav &&
    <nav> 
      <ul>
        <li>
          <Link to="/">página inicial</Link>
        </li>
        <li>  
          <Link to="/sobre">sobre mim</Link>
        </li>
        <li>  
          <Link to="/portfolio">portfolio</Link>
        </li>
        <li>  
          <Link to="/contato">contato</Link>
        </li>
      </ul>
    </nav> : '' }
  </div>
)

}  

export default Nav;    
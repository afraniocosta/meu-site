import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.scss'

function Nav() {

const [showNav, setShowNav] = useState(false); 
const isMobile = window.innerWidth <= 375
const isDesktop = window.innerWidth > 768


return(
  <div className="navhome mr-3">
    { isMobile ? <button for="navicon" class="btn-hamburger" onClick={() => setShowNav(!showNav)}>
      <div className='navOne'></div>
      <div className='navTwo'></div>
      <div className='navThree'></div>
    </button> : ''}
    { isDesktop ? 
    // criar um componente ul e chamar ele aqui em cada nav. Assim terei um apenas
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
    </nav>: showNav &&
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
    </nav> }
  </div>
)

}  

export default Nav;    
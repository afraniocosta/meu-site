import React, { useState } from 'react'
import './nav.scss'
import Ul from '../Ul';

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
    <nav> 
      <Ul />
    </nav>: showNav &&
    <nav> 
       <Ul />
    </nav> }
  </div>
)

}  

export default Nav;    
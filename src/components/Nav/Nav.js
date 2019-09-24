import React from 'react';
import { Link } from 'react-router-dom'
import './nav.scss'

function Nav() {

return(
  <div className="navhome">
    <nav> 
      <ul>
        <li>
          <Link to="/">home</Link>
          <Link to="/sobre">sobre mim</Link>
          <Link to="/portfolio">portfolio</Link>
        </li>
      </ul>
    </nav>
  </div>
)

}  

export default Nav;    
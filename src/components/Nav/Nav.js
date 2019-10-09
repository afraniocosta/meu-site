import React from 'react'
import { Link } from 'react-router-dom'
import './nav.scss'

function Nav() {

return(
  <div className="navhome">
    <div class="nav-toggle">
      <label for="navicon" class="hamburger" onClick={evt => { console.log('hah') }}>
          <span className="trace-one"></span>
          <span className="trace-two"></span>
          <span className="trace-three"></span>
      </label>
    </div>
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
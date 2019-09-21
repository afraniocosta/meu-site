import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {

return(
  <nav>
    <a href="a">menu</a>
    <ul>
      <li>
        <Link to="/pages/Sobre">Sobre mim</Link>
      </li>
    </ul>
  </nav>
)

}  

export default Nav;    
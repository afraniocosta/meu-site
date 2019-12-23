import React from 'react';
import { Link } from 'react-router-dom'
import './ul.scss'

function Ul() {

return(
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
)

}  

export default Ul;    
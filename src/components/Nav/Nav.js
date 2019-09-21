import React from 'react';
import data from './nav.json';

function Nav() {

  return(
    <nav>
      <a href="a">menu</a>
      <ul>
        {data.map((item, index) => (
          <li>
            <a href="{item.menuLink}">{item.menuName}</a>
          </li>
        ))}
      </ul>
    </nav>
  )

}  

export default Nav;    
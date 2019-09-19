import React from 'react';
import data from './json/nav.json';

function Header() {

  return(
    <header>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <h1>AFRÂNIO COSTA</h1>
            <p>FRONT-END DEVELOPER</p>
          </div>
          <div className="col-12 col-lg-9">
            <nav>
              <ul>
                {data.map((item, index) => (
                  <li>
                    <a href="{item.menuLink}">{item.menuName}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )

}    

export default Header;      
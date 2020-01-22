import React from 'react';
import Nav from '../Nav';
import './header.scss'

function Header() {

  return(
    <header>
      <div id="header" className="container">
        <div className="row mx-0">
          <div className="col-12 col-lg-3 mt-5">
            <h1>AFRÂNIO COSTA</h1>
          </div>
          <div className="col-12 col-lg-9">
            <Nav />
          </div>
        </div>
      </div>
    </header>
  )

}    

export default Header;      
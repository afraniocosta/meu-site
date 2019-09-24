import React from 'react'
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

function Portfolio () {
  return (
    <container>
      <section>
        <div className="container">
          <div className="col-12">
            <h1>AFRÂNIO COSTA</h1>
          </div>
          <div>
            <div className="navHome">
              <Nav />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h>Portfólio</h>
      </section>
      <Footer />
    </container>
  )
}

export default Portfolio
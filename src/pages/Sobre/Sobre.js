import React from 'react'
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

function Sobre () {
  return (
    <>
      <section>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="grid-12 ">
              <h1>AFRÂNIO COSTA</h1>
            </div>
            <div className="grid-12 ">  
              <Nav />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col-8">
              <h>Sobre mim</h>
            </div>
            <div className="col-4">
              <h>foto</h>
            </div>  
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-5">
            <Footer />
          </div>
        </div>
      </section>
    </>
  )
}

export default Sobre;
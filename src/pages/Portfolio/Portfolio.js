import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Portfolio () {
  return (
    <>
      <section>
        <Header />
      </section>

      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col-8">
              <h>Portfolio</h>
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

export default Portfolio
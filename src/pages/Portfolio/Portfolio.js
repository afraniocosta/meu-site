import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Jobs from '../../components/Jobs/Jobs';

function Portfolio () {
  return (
    <>
      <section>
        <Header />
      </section>

      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col-12">
              <h1 className='mb-5'>Portfolio</h1>
              <Jobs />
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
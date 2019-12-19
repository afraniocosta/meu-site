import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Jobs from '../../components/Jobs/Jobs';
import '../../assets/variaveis.scss'

function Portfolio () {
  return (
    <>
      <section>
       <div className="container">
          <div className="row">
            <Header />
          </div>
        </div>  
      </section>

      <section>
        <div className="container">
          <div className="row mt-5">
            <h2 className='mb-5'>Últimos <span className='gray-color'>trabalhos</span></h2>
            <Jobs />
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}

export default Portfolio
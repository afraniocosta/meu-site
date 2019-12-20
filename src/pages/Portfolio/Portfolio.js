import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Jobs from '../../components/Jobs/Jobs';
import './portfolio.scss';
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

      <section id='portfolio'>
        <div className="container">
          <div className="row mt-5">
          <h2 className="mt-5 green-color">Últimos <span className='gray-color'>trabalhos</span></h2>
          </div>
          <div className="row">
            <Jobs />
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}

export default Portfolio
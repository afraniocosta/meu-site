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
          <div className="row mt-5 mx-0">
            <h2 className="green-color">Últimos <span className='gray-color'>trabalhos</span></h2>
          </div>
         
            <Jobs />
          
        </div>
      </section>
      
      <Footer />
    </>
  )
}

export default Portfolio
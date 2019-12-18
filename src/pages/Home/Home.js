import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './home.scss'
import avatar from '../../assets/avatar.png'

function Home () {
  return (
      <>
        <section>
          <div className="container">
            <div className="row">
              <Header />
            </div>
          </div>  
        </section>
        
        <div id="home" className="container">
          
          <div className="row">
          
            <div className="col-sm-6 offset-1 col-md-6 col-lg-6 offset-lg-1 order-lg-2 mt-5">
              <img src={avatar} className='circle-photo' alt="Afrânio"/>
            </div>

            <div className="col-12 col-md-6 col-lg-5 mt-3">
              <h2 className="mt-5 green-color">
              Quem <span className='gray-color'>sou eu</span>
              </h2>  
            
              <p className="mt-3 gray-text"> 
                Formado em Publicidade e Propaganda e em Análise e Desenvolvimento de Sistemas. Atuo como Front-End há xx anos.
              </p>

              <p>saiba mais sobre mim</p>
            
            </div>

          </div>

        </div>
      <Footer />
      </>
  )
}

export default Home;
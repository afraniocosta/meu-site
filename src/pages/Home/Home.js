import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './home.scss'
import afranio from '../../assets/afranio.png'

function Home () {
  return (
      <>
        <section>
          <Header />
        </section>
        
        <div id="home" className="container">
          
          <div className="row">
          
            <div className="col-12 col-md-6 col-lg-6 offset-lg-1 order-lg-2 mt-5">
              <img src={afranio} alt="Afrânio"/>
            </div>

            <div className="col-12 col-md-6 col-lg-5 mt-3">
              <h2 className="mt-5 green-text">
              Front-End
              </h2>  
            
              <p className="mt-3 gray-text"> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </p>
            
            </div>

          </div>

        </div>
      <Footer />
      </>
  )
}

export default Home;
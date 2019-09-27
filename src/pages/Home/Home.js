import React from 'react'
import Header from '../../components/Header/Header';
import './home.scss'
import afranio from '../../assets/afranio.png'
import site1 from '../../assets/site-1.jpg'
import site2 from '../../assets/site-2.jpg'
import site3 from '../../assets/site-3.jpg'

function Home () {
  return (
      <div id="home" className="container">
         <Header />
        <div className="row mt-5">
         
          <div className="col-12 col-md-6 col-lg-6 offset-lg-1 order-lg-2 mt-5">
             <img src={afranio} alt="Afrânio"/>
          </div>

          <div className="col-12 col-md-6 col-lg-5">
            <p className="mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p> 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing,
            </p>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p> 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing,
            </p>
          </div>

        </div>

        <div className="row mt-5">
          
          <div id="home" className="container">
            <h2>O que tenho feito</h2>
          </div>
          
          <div className="row mt-3 galery-home">
            

              <div className="img-jobs">
                <img src={site1} alt="Site" />
              </div>



              <div className="img-jobs">
                <img src={site1} alt="Site" />
              </div>


              <div className="img-jobs">
                <img src={site1} alt="Site" />
              </div>


            <div id="home" className="container text-center mt-3">
              <p>Veja mais</p>
            </div>

          </div>

        </div>  

      </div>
  )
}

export default Home;
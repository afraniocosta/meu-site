import React from 'react'
import Nav from '../../components/Nav/Nav';
import './home.scss'

function Home () {
  return (
    <section id="home">
      <div id="home" className="d-flex justify-content-center">
        <div className="grid-12">
          <h1>AFRÂNIO COSTA</h1>
        </div>
        <div className="grid-12 ">  
          <Nav />
        </div>
      </div>
    </section>
  )
}

export default Home;
import React from 'react'
import Nav from '../../components/Nav/Nav';
import './home.scss'

function Home () {
  return (
    <section>
      <div id="home">
        <div className="grid-12">
          <h1>AFRÂNIO COSTA</h1>
          <Nav />
        </div>
      </div>
    </section>
  )
}

export default Home;
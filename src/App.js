import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <Header />
      <container>
        <section>
          <div className="container">
            <div className="col-12">
              <h1>AFRÂNIO COSTA</h1>
              <p>FRONT-END DEVELOPER</p>
            </div>
            <div>
              <div className="navHome">
                <a href="#">menu</a>
                <ul>
                  <li><a href="">sobre mim</a></li>
                  <li><a href="">potfólio</a></li>
                  <li><a href="">contato</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </container>

      <Footer />

    </>
  );
}

export default App;

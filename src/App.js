import React from 'react';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <container>
        <section>
          <div className="container">
            <div className="col-12">
              <h1>AFRÂNIO COSTA</h1>
            </div>
            <div>
              <div className="navHome">
                <Nav />
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

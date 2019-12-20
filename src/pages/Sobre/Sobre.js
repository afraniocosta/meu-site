import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './sobre.scss'

function Sobre () {
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
        <div id="sobre" className="container">
          <div className="row mt-5">
            <div className="col-12">
            <h2 className="mt-5 green-color">Sobre <span className='gray-color'>mim</span></h2>
             <p className="mt-3 gray-text"> 
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, 
              e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja 
              de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu 
              não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo 
              essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques 
              contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares 
              de editoração eletrônica como Aldus PageMaker.
             </p>
            </div>
            <div className="col-12">
              <h>foto</h>
            </div>  
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}

export default Sobre;
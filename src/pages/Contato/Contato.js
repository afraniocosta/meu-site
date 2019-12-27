import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './contato.scss'

function Contato () {
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
        <div id="contato" className="container">
          <div className="row mt-5">
            <div className="col-12">
            <h2 className="green-color">Contato</h2>
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
              <h2>foto</h2>
            </div>  
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contato;
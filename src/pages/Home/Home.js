import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import './home.scss'
import './../../assets/custom.scss'
import avatar from '../../assets/avatar.png'
import * as S from './styles';
import { ThemeProvider } from 'styled-components'
import defaultTheme from '../../themes/defaultTheme'; 

function Home () {

  return (
    <ThemeProvider theme={defaultTheme}>
      <S.Section>
        <S.Container>
          <div className="row">
            <Header />
          </div>
        </S.Container>  
      </S.Section>
      
      <div id="home" className="container mt-5">
        <div className="row">
          <div className="col-sm-6 offset-1 col-md-6 col-lg-6 offset-lg-1 order-lg-2 mt-5">
            <img src={avatar} className='circle-photo' alt="Afrânio"/>
          </div>
          <div className="col-12 col-md-6 col-lg-5 mt-3 ml-0">
            <h2 className="mt-5 green-color">
            <S.Title fontSize={24} numbers='one'>
              Quem  <span>sou eu</span>
            </S.Title>
            </h2> 
            <S.Paragrafo fontSize={14} >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </S.Paragrafo> 
            <p className="mt-3 gray-text"> 
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
            <p>saiba mais sobre mim</p>
          </div>
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export default Home;
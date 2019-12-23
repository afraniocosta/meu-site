import React, { useState, useEffect, useRef } from 'react'
import './jobs.scss';
import data from './jobs.json';

function Jobs(){
  
  const imagemPortfolio = require.context('./images');

  const [activeItem, updateActiveItem] = useState();
  const [portfolioView, updateportfolioView] = useState('portfolio');

  // Definindo largura e altura
  const isMobile = window.innerWidth <= 768
  const portfolioAmount = data.length >= 6

  // Usando ref
  const containerRef = useRef(null);
  useEffect(() => {
    containerRef.current.style = 'height: 500px;'
    console.log(containerRef.current.offsetHeight)
  }, [])

  // useEffect(()=>{
  //   updateportfolioView() 
  //     console.log('click')
  // })

  //   useEffect(() => {
  //   setTimeout(() => {
  //     const styleClass = !portfolioAmount ? 'bordered-bottom' : 'no-border'
  //     updateportfolioView(styleClass)
  //   }, portfolioAmount ? 0 : 400)
  // }, [portfolioAmount])

  // useEffect: https://overreacted.io/pt-br/a-complete-guide-to-useeffect/

  return(
  
    <>
      <div className={`row ${portfolioView}`} ref={containerRef}>         
        {data.map((item, index) => (

        <div className='mt-3 col-12 col-md-6 col-lg-4'>
          
          { activeItem === index || isMobile ?
            
            <div className='content-job'>
              
              <h2 className='mb-3 title'>
                {item.title}
              </h2>
              
              <p className='mb-3 description'>
                {item.description}
              </p>
              
              <p className='tecnology'>
                Tecnologia: {item.framework}
              </p>
              
              <p className='text-link mt-5 text-link'>
                <a href={item.link} title={item.title}>visitar</a>
              </p>

              <p className='less' onClick={() => updateActiveItem(!index)} title='Fechar'>-</p>
              
            </div>
            :  
            <div>
              <img src={imagemPortfolio(item.image)} className='img-fluid' alt={item.title}/>
              <p className='more' onClick={() => updateActiveItem(index)} title='Ver o projeto'>+</p>
            </div>  
          }
          
        </div>

        ))
        }

      </div> 
        <div className='row col-12'>
          { portfolioAmount ? 
            <div>
              <buttom className='btn-see-more' onClick={() => updateportfolioView()} >ver mais</buttom>
            </div> : ''
          }   
        </div>
    </>
  )
}

export default Jobs;
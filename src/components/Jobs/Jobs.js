import React, { useState } from 'react'
import './jobs.scss';
import data from './jobs.json';

function Jobs(){

  const [activeItem, updateActiveItem] = useState();
  
  const isMobile = window.innerWidth <= 768

  const imagemPortfolio = require.context('./images');


  return(
  
    <>
      <div className='jobs'>
                
        {data.map((item, index) => (

        <div className='job mt-3 col-12 col-lg-4'>
          
          { activeItem === index || isMobile ?
            
            <div className='bg-content-job'>
              
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
    </>
  )
}

export default Jobs;
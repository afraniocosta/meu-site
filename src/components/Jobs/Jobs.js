import React, { useState, useEffect } from 'react'
import './jobs.scss';
import data from './jobs.json';

function Jobs(){

  const [showItems, setShowItems] = useState(false);
  const [itens, updateItens] = useState([])
  const [itemAtivo, updateItemAtivo] = useState()
  
  // const isMobile = window.innerWidth >= 768

  const imagemPortfolio = require.context('./images');


  return(
  
    <>
      <div className='jobs'>
        <div className='container'>
          <div className='wraper'> 
                
            {data.map((item, index) => (

            <div className='teste'>

              <img src={imagemPortfolio(item.image)} className='img-fluid' alt={item.title}/>

              <p className='more' onClick={() => setShowItems(!showItems)} title='Ver o projeto'>{ showItems ? '-' : '+' }</p>
              <button onClick={() => updateItemAtivo(index)}>Expandir</button>
              { itemAtivo === index ? <h1>Expandido</h1> : null }
              
              {showItems && 
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
                  
                </div>
              }

            </div>
              
              // <div className='mb-5 col-12 col-md-6 col-lg-4'>

              //   <img src={imagemPortfolio(item.image)} className='img-fluid' />
                
              //   <p className='more' onClick={() => setShowItems(!showItems)} title='Ver o projeto'>{ showItems ? '-' : '+' }</p>
              //   {console.log(item)}
              
              //   {showItems && 
              //     <div className='bg-content-job'>
                    
              //       <h2 className='mb-3 title'>
              //         {item.title}
              //       </h2>
                    
              //       <p className='mb-3 description'>
              //         {item.description}
              //       </p>
                    
              //       <p className='tecnology'>
              //         Tecnologia: {item.framework}
              //       </p>
                    
              //       <p className='text-link mt-5 text-link'>
              //         <a href={item.link} title={item.title}>visitar</a>
              //       </p>
                    
              //     </div>
              //   }
                
              // </div>

              ))
            }
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Jobs;

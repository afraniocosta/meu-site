import React, { useState } from 'react'
import './jobs.scss';
import data from './jobs.json';
import conta from './images/conta.png'


function Jobs(){

  const [showItems, setShowItems] = useState(false);  

  return(
    <>
      <div className='jobs'>
        <div className='container'>
          <div className='row'> 
                
            {data.map((item, index) => (
              
              <div className='mb-5 col-lg-4'>

                <img src={conta} className='img-fluid img-job' alt="Afrânio"/> 
                
                <p className='bg-more' onClick={() => setShowItems(!showItems)}>+</p>
              
                {showItems && 
                  <div>
                    
                    <h2 className='mb-3'>{item.title}</h2>
                    <p className='mb-3'>{item.description}</p>
                    <p>Tecnologia: {item.framework}</p>
                    
                  </div>
                }
                
                <p className='text-right text-link mt-3'>
                  <a href={item.link} title={item.title}>visitar</a>
                </p>

              </div>

              ))
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default Jobs;

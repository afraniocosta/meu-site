import React, { useState, useEffect } from 'react'
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
              
              <div className='mb-5 col-12 col-md-6 col-lg-4'>

                <img src={conta} className='img-fluid img-job' alt="Afrânio"/> 
                
                <p className='more' onClick={() => setShowItems(!showItems)} title='Ver o projeto'>+</p>
              
                {showItems && 
                  <div className='bg-content-job'>
                    
                    <p className='mb-3 title'>{item.title}<br></br>
                      <span className='mb-3 description'>{item.description}</span>
                    </p>
                    <p className='tecnology'>Tecnologia: {item.framework}</p>
                    <p className='text-link mt-5 text-link'>
                      <a href={item.link} title={item.title}>visitar</a>
                    </p>
                    
                  </div>
                }

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

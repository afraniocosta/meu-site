import React from 'react';
import './jobs.scss';
import data from './jobs.json';

function Jobs(){

  return(
    <>
      <div className='container'>
        <div className='row'> 
          {data.map((item, index) => (
            <div className="mb-5 col-lg-4">
              <h2 className='mb-3'>{item.title}</h2>
              <img className='img-fluid' src={item.img} alt="{item.title}"/>
              <p className="text-right">
                <a href="#">visitar</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Jobs;

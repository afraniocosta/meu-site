import React, { useState } from 'react'
import './css/quiz.css'
import StepsHandler from './StepsHandler.js'

function Quiz(){
  const [currentStep, setCurrentStep] = useState(0)
  //const [score, setScore] = useState(0)

  function handleNextStep () {
    // if(answer === true) {
    //   setScore(score + 1)
    //   console.log(score)
    // }
    setCurrentStep(currentStep + 1)
  }
  
  function handlePreviousStep () {
    setCurrentStep(currentStep - 1)
  }

  return(
    <>
      <div className='container'>
        <div className='row'> 
          <StepsHandler currentStep={currentStep} setCurrentStep={setCurrentStep}/>
          <div className='mt-15 botoes'>
            <div className='col-lg-6'>
              {currentStep !== 0 ? <button className='button' onClick={handlePreviousStep}>Anterior</button>: ''}
            </div>  
            <div className='col-lg-6'>
              {currentStep !== 4 ? <button className='button' onClick={handleNextStep}>Próximo</button> : ''}
            </div>
          </div>
        </div>
      </div>
    </>  
  )
}  
    
export default (Quiz)
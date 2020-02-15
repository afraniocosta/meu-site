import React, {useState} from 'react'
import InputRadio from './InputRadio'
import './css/quiz.css'

//import Quiz from './Quiz.js'

function StepsHandler ({currentStep}) {
  const [check, setCheck] = useState({
    name: ""
  });

  function onRadioChange (evt) {
    console.log(evt.target.value);
    setCheck({
      [evt.target.name]: evt.target.value
    })
  }

  const StepOne = () => {
    return (
      <>
        <p>1- Em que ano o Cruzeiro conquistou o bi campeonato da Libertadores?</p>
        <label><InputRadio name="libertadores" value="2017" checked={check.libertadores === '2017'} onChange={onRadioChange} />2017 nos penaltes.</label> 
        <label><InputRadio name="libertadores" value="1997" checked={check.libertadores === '1997'} onChange={onRadioChange} />1997 com gol de Elivelton.</label> 
        <label><InputRadio name="libertadores" value="1996" checked={check.libertadores === '1996'} onChange={onRadioChange} />1996 com um empate de 0 a 0.</label> 
        <label><InputRadio name="libertadores" value="1993" checked={check.libertadores === '1993'} onChange={onRadioChange} />1993 com gol nos acréscimos.</label>
      </>
    )
  }

  const StepTwo = () => {
    return (
      <>
        <p>2- Em 2011 o Cruzeiro goleuou o Atlético na última rodada do brasileiro. Qual foi o placar?</p>
        <label><InputRadio name="goleada" value="3x0" checked={check.goleada === '3x0'} onChange={onRadioChange} />3x0</label> 
        <label><InputRadio name="goleada" value="4x1" checked={check.goleada === '4x1'} onChange={onRadioChange} />4x1</label> 
        <label><InputRadio name="goleada" value="6x1" checked={check.goleada === '6x1'} onChange={onRadioChange} />6x1</label> 
        <label><InputRadio name="goleada" value="5x0" checked={check.goleada === '5x0'} onChange={onRadioChange} />5x0</label>
      </>
    )
  }

  const StepThree = () => {
    return (
      <>
        <p>3- Em 2003 o Cruzeiro conquistou a tríplice coroa. Quais foram os títulos?</p>
        <label><InputRadio name="triplice" value="2017" checked={check.triplice === '2017'} onChange={onRadioChange} />Copa do Brasil, Recopa e Mineiro</label> 
        <label><InputRadio name="triplice" value="1997" checked={check.triplice === '1997'} onChange={onRadioChange} />Brasileiro, Recopa e Copa do Brasil</label> 
        <label><InputRadio name="triplice" value="1996" checked={check.triplice === '1996'} onChange={onRadioChange} />Sulamericana, Brasileiro e Copa do Brasil</label> 
        <label><InputRadio name="triplice" value="1993" checked={check.triplice === '1993'} onChange={onRadioChange} />Mineiro, Copa do Brasil e Brasileiro</label>
      </>
    )
  }

  const StepFour = () => {
    return (
      <>
        <p>4- </p>
        <label><InputRadio name="libertadores" value="2017" checked={check.libertadores === '2017'} onChange={onRadioChange} />2017 nos penaltes.</label> 
        <label><InputRadio name="libertadores" value="1997" checked={check.libertadores === '1997'} onChange={onRadioChange} />1997 com gol de Elivelton.</label> 
        <label><InputRadio name="libertadores" value="1996" checked={check.libertadores === '1996'} onChange={onRadioChange} />1996 com um empate de 0 a 0.</label> 
        <label><InputRadio name="libertadores" value="1993" checked={check.libertadores === '1993'} onChange={onRadioChange} />1993 com gol nos acréscimos.</label>
      </>
    )
  }

  const StepFive = () => {
    return (
      <>
        <p>5- Em 2011 o Cruzeiro goleuou o Atlético na última rodada do brasileiro. Qual foi o placar?</p>
        <label><InputRadio name="libertadores" value="2017" checked={check.libertadores === '2017'} onChange={onRadioChange} />2017 nos penaltes.</label> 
        <label><InputRadio name="libertadores" value="1997" checked={check.libertadores === '1997'} onChange={onRadioChange} />1997 com gol de Elivelton.</label> 
        <label><InputRadio name="libertadores" value="1996" checked={check.libertadores === '1996'} onChange={onRadioChange} />1996 com um empate de 0 a 0.</label> 
        <label><InputRadio name="libertadores" value="1993" checked={check.libertadores === '1993'} onChange={onRadioChange} />1993 com gol nos acréscimos.</label>
      </>
    )
  }

  let content = ''
    switch (currentStep) {
      case 0:
        content = <StepOne />
        break
      case 1:
        content = <StepTwo />
        break
      case 2:
        content = <StepThree />
        break
      case 3:
        content = <StepFour />
        break
      case 4:   
        content = <StepFive />
    }
    return content
}

export default (StepsHandler)
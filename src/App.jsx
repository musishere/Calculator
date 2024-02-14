import { useState } from 'react'
import styles from './App.module.css'
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'

function App() {
    const [calVal,setcalVal]=useState("");

    const onButtonClick=(buttonText)=>{
      if(buttonText==='C' || buttonText==='c'){
        setcalVal("");
      }else if(buttonText==='='){
        const result=eval(calVal);
        setcalVal(result);
      }else{
        const newDisplay= calVal + buttonText;
        setcalVal(newDisplay);
      }
    }
  return (
      <div className={styles.Calculator}>
        <Display displayvalue={calVal}/>
        <ButtonContainer onButtonClick={onButtonClick}/>
      </div>
  )
}

export default App

import './App.css'
import Display from './components/display'
import Buttons from './components/Buttons'
import { useContext, useState } from 'react'

function App() {
 
  let [calVal,setCalVal]=useState('');
  let onButtonClick=(buttonText)=>{
      if(buttonText=='C'){
        setCalVal("")
      }
      else if(buttonText=="="){
        let result=eval(calVal)
        setCalVal(result)
      }
      else{
        const newDisplayVal=calVal+buttonText;
        setCalVal(newDisplayVal);
      }
  }
  

  return (
    <div className="calculator">
      <Display displayVal={calVal}></Display>
      <Buttons onButtonClick={onButtonClick}></Buttons>
    </div>
  )
}
export default App

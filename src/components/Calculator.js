import React from 'react'
import { useState } from 'react'




const Calculator = () => {
    const [value,setValue]=useState('')
    function btnClick(e){
          setValue(value+ e.target.innerHTML)
    }
    function clearScreen(){
      setValue("");
    }
    function del(){
      setValue(value.toString().slice(0,-1));
    }
     function output(){
      setValue(eval(value));
     }
    
  return (
   <> 
      <div className='calculator'>
       <input type='text' placeholder='0' value={value}/> 
         <div>
            <button onClick={clearScreen}>Clear</button>
            <button onClick={del}>Delete</button>
            <button onClick={btnClick}>.</button>
            <button onClick={btnClick}>/</button>
         </div>
         <div>
            <button onClick={btnClick}>7</button>
            <button onClick={btnClick}>8</button>
            <button onClick={btnClick}>9</button>
            <button onClick={btnClick}>*</button>
        </div>
        <div>
            <button onClick={btnClick}>4</button>
            <button onClick={btnClick}>5</button>
            <button onClick={btnClick}>6</button>
            <button onClick={btnClick}>-</button>
         </div>
         <div>
            <button onClick={btnClick}>1</button>
            <button onClick={btnClick}>2</button>
            <button onClick={btnClick}>3</button>
            <button onClick={btnClick}>+</button>
        </div>
        <div>
            <button onClick={btnClick}>0</button>
            <button onClick={output}>=</button>
            </div>
      </div>
   </>
  )
}

export default Calculator
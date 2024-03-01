import React, { useState } from 'react'
import InputBox from './InputBox';

function GameOptions({ text, rate, clickCallBack }) {

  const [showInput, setShowInput] = useState(false);
  const [betAmount, setBetAmount] = useState(0);


  const BetClickHandler = () => {
    setShowInput(!showInput);
    clickCallBack();
  }

  const orderClickHandler = () =>{
    alert("Order placed")
    setShowInput(false);
  }

  const betAmountClickHandler = (amount) => {
    setBetAmount(amount * rate);
  }

  const cancelClickHandler = () => {
    setShowInput(false);
    setBetAmount(0);
  }

  return (
    <>
      <div style={{ display: 'flex', borderBottom: 'solid black 1px', padding: '1vh' }}>
        <div style={{ width: '85%', borderRight: 'solid black 1px', display: 'flex', textTransform: 'uppercase' }}>
          {text} { betAmount>=100 && <span style={{color:'green', marginLeft:'1vw'}}>+{betAmount}</span> }
        </div>
        <div style={{ width: '15%', cursor: 'pointer' }} onClick={BetClickHandler}>
          {rate}
        </div>
      </div>
      { showInput && <InputBox onOrderClick={orderClickHandler} onCancelClick={() => cancelClickHandler()} betAmountClick={(val) => betAmountClickHandler(val)} /> }
    </>
  )
}

export default GameOptions
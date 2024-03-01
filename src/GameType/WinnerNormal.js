import React from 'react'
import GameOptions from '../GameOptions'

function WinnerNormal() {

    const alert1 = () =>{
        // alert("dsfsd")
       }

  return (
    <div>
        <div className='game-header'>Winner</div>
        <GameOptions text='Player A' rate='1.98' clickCallBack={ () => alert1()}/>
        <GameOptions text='Player B' rate='1.98' clickCallBack={ () => alert1()}/>
    </div>
  )
}

export default WinnerNormal
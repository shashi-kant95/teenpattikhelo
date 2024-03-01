import React from 'react'
import GameOptions from '../GameOptions'

function WinnerDouble() {
    const alert1 = () =>{
        // alert("dsfsd")
       }

  return (
    <div>
        <div className='game-header'>pair ( double ) 1:4</div>
        <GameOptions text='Player A ( Pair )' rate='1.98' clickCallBack={ () => alert1()}/>
        <GameOptions text='Player B ( pair )' rate='1.98' clickCallBack={ () => alert1()}/>
    </div>
  )
}

export default WinnerDouble
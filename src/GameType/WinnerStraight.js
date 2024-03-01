import React from 'react'
import GameOptions from '../GameOptions'

function WinnerStraight() {
    const alert1 = () =>{
        // alert("dsfsd")
       }

  return (
    <div>
        <div className='game-header'>Straight ( rown ) 1:14</div>
        <GameOptions text='Player A ( Straight )' rate='14' clickCallBack={ () => alert1()}/>
        <GameOptions text='Player b ( Straight )' rate='14' clickCallBack={ () => alert1()}/>
    </div>
  )
}

export default WinnerStraight
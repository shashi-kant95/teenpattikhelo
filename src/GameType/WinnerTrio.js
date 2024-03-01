import React from 'react'
import GameOptions from '../GameOptions'

function WinnerTrio() {
    const alert1 = () =>{
        // alert("dsfsd")
       }

  return (
    <div>
        <div className='game-header'>Trio ( Teen ) 1:75</div>
        <GameOptions text='Player A ( TRio )' rate='75' clickCallBack={ () => alert1()}/>
        <GameOptions text='Player B ( TRio )' rate='75' clickCallBack={ () => alert1()}/>
    </div>
  )
}

export default WinnerTrio
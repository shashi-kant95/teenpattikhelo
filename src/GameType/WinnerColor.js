import React from 'react'
import GameOptions from '../GameOptions'

function WinnerColor() {
    const alert1 = () =>{
        // alert("dsfsd")
       }

  return (
    <div>
        <div className='game-header'>Flush ( color ) 1:8</div>
        <GameOptions text='Player A ( Flush )' rate='8' clickCallBack={ () => alert1()}/>
        <GameOptions text='Player B ( Flush )' rate='8' clickCallBack={ () => alert1()}/>
    </div>
  )
}

export default WinnerColor
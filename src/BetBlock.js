import React from 'react'
import WinnerNormal from './GameType/WinnerNormal'
import WinnerDouble from './GameType/WinnerDouble'
import WinnerColor from './GameType/WinnerColor'
import WinnerStraight from './GameType/WinnerStraight'
import WinnerTrio from './GameType/WinnerTrio'

function BetBlock() {
    
  return (
    <div>
        <WinnerNormal/>
        <WinnerDouble/>
        <WinnerColor/>
        <WinnerStraight/>
        <WinnerTrio/>
    </div>
  )
}

export default BetBlock
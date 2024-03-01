import React from 'react'
import Header from '../Header'
import GameArea from '../GameArea'
import BetBlock from '../BetBlock'
import RecentWinners from '../RecentWinners'

function Home() {
  return (
    <div>
        <Header/>
        <GameArea/>
        <RecentWinners/>
        {/* <div style={{width:'100%', height:'5vh', backgroundColor:'red'}}></div> */}
        <div className='game-bet-block'>
        <BetBlock/>

        </div>
    </div>
  )
}

export default Home
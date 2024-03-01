import React, { useState, useEffect } from 'react'

function CountDown({ timerReach, startNewgame, secondChange }) {


  const [timeRemaining, setTimeRemaining] = useState(0);
  const gameStartTime = 30;
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const secondsUntilNextMinute = 60 - currentTime.getSeconds();

      // If less than 30 seconds left for the next minute, start countdown from 30 seconds
      const countdown = secondsUntilNextMinute;
      if(secondsUntilNextMinute % 10 ==0 )
      secondChange();

      setTimeRemaining(countdown);
      if (secondsUntilNextMinute === 30) {
        timerReach() // API call
      }
      console.log(secondsUntilNextMinute);
      if(secondsUntilNextMinute == 60){
        startNewgame()
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); //

  const timerStyle1 = {
    color: timeRemaining - gameStartTime <= 5 ? 'red' : timeRemaining - gameStartTime <= 20 ? 'yellow' : 'green',
    borderColor: timeRemaining - gameStartTime <= 5 ? 'red' : timeRemaining - gameStartTime <= 20 ? 'yellow' : 'green',
  }

  return (
    <>
      {timeRemaining == 0 || timeRemaining >= gameStartTime && <div style={timerStyle1} className='timerStyle'>{timeRemaining - gameStartTime}</div>}
    </>
  );
};

export default CountDown
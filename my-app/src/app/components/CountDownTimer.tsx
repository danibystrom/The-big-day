'use client';
import { useCallback, useEffect, useState } from 'react';

function CountdownTimer() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [targetDate] = useState(new Date('2026-08-21T10:00:00')); 
    
    const onTimerEnd = useCallback(() => {
      console.log('Timer Ended!'); 
    }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  
    return () => {
      clearInterval(intervalId);
      if (currentTime >= targetDate) {
        onTimerEnd();
      }
    };
  }, [currentTime, targetDate]); 
  

  const getTimeRemaining = () => {
    const totalTime = targetDate.getTime() - currentTime.getTime();
    const seconds = Math.floor((totalTime / 1000) % 60);
    const minutes = Math.floor((totalTime / (1000 * 60)) % 60);
    const hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(totalTime / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const { days, hours, minutes, seconds } = getTimeRemaining();

  return (
    <div>
      <div>
        {days > 0 && <span> days: {days}</span>}
        {hours > 0 && <span> hours: {hours.toString().padStart(2, '0')}</span>}
        <span> minutes: {minutes.toString().padStart(2, '0')}:</span>
        <span> seconds: {seconds.toString().padStart(2, '0')}</span>
      </div>
    </div>
  );
}

export default CountdownTimer;
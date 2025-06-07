'use client';
import { Box, Typography } from '@mui/material';
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
  }, [currentTime, targetDate, onTimerEnd]);


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
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      {days > 0 && <Typography sx={{ padding: 0.5 }}>{days} days,</Typography>}
      {hours > 0 && <Typography sx={{ padding: 0.5 }}>{hours.toString().padStart(2, '0')} hours,</Typography>}
      <Typography sx={{ padding: 0.5 }}>{minutes.toString().padStart(2, '0')} minutes,</Typography>
      <Typography sx={{ padding: 0.5 }}>{seconds.toString().padStart(2, '0')} seconds,</Typography>
    </Box>
  );
}

export default CountdownTimer;
"use client";
import { Box, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

function CountdownTimer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [targetDate] = useState(new Date("2026-08-21T10:00:00"));

  const onTimerEnd = useCallback(() => {
    console.log("Timer Ended!");
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

  const { days, hours, minutes } = getTimeRemaining();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "nowrap",
      }}
    >
      {days > 0 && (
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Italiana", sans-serif',
            display: "inline-flex",
            alignItems: "baseline",
            padding: 0.5,
            lineHeight: 1,
            marginBottom: 2,

          }}
        >
          {days}
          <span
            style={{
              fontSize: "1.25rem",
              marginLeft: "0.25rem",
              verticalAlign: "bottom",
            }}
          >
            DAYS
          </span>
        </Typography>
      )}
      {hours > 0 && (
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Italiana", sans-serif',
            display: "inline-flex",
            alignItems: "baseline",
            padding: 0.5,
            lineHeight: 1,
            marginBottom: 2,

          }}
        >
          {hours.toString().padStart(2, "0")}
          <span
            style={{
              fontSize: "1.25rem",
              marginLeft: "0.25rem",
              verticalAlign: "bottom",
            }}
          >
            HOURS
          </span>
        </Typography>
      )}
      <Typography
        variant="h1"
        sx={{
          fontFamily: '"Italiana", sans-serif',
          display: "inline-flex",
          alignItems: "baseline",
          padding: 0.5,
          lineHeight: 1,
          marginBottom: 2,

        }}
      >
        {minutes.toString().padStart(2, "0")}
        <span
          style={{
            fontSize: "1.25rem",
            marginLeft: "0.25rem",
            verticalAlign: "bottom",
          }}
        >
          MINUTES
        </span>
      </Typography>
      {/* <Typography
        variant="h1"
        sx={{
          fontFamily: '"Italiana", sans-serif',
          display: "inline-flex",
          alignItems: "baseline",
          padding: 0.5,
          lineHeight: 1,
          marginBottom: 2,

        }}
      >
        {seconds.toString().padStart(2, "0")}
        <span
          style={{
            fontSize: "1.25rem",
            marginLeft: "0.25rem",
            verticalAlign: "bottom",
          }}
        >
          seconds,
        </span>
      </Typography> */}
    </Box>
  );
}

export default CountdownTimer;
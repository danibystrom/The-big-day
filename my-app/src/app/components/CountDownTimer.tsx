"use client";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

function CountdownTimer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [targetDate] = useState(new Date("2026-08-21T10:00:00"));

  const router = useRouter();


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

  const { days, hours, minutes, seconds } = getTimeRemaining();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "nowrap",
        mt: 10,
      }}
    >
      {days > 0 && (
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Italiana", sans-serif',
            display: "block",
            alignItems: "baseline",
            padding: 0.5,
            lineHeight: 1,

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
            DAGAR
          </span>
        </Typography>
      )}
      {hours > 0 && (
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Italiana", sans-serif',
            display: "block",
            alignItems: "baseline",
            padding: 0.5,
            lineHeight: 1,

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
            TIMMAR
          </span>
        </Typography>
      )}
      <Typography
        variant="h1"
        sx={{
          fontFamily: '"Italiana", sans-serif',
          display: "block",
          alignItems: "baseline",
          padding: 0.5,
          lineHeight: 1,

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
          MINUTER
        </span>
      </Typography>
      <Typography
        variant="h1"
        sx={{
          fontFamily: '"Italiana", sans-serif',
          display: "block",
          alignItems: "baseline",
          padding: 0.5,
          lineHeight: 1,

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
          SEKUNDER
        </span>
      </Typography>

      <Button
        onClick={() => router.push("/start")}
        variant="outlined"
        disableRipple
        sx={{
          border: "1px solid #000",
          color: "#000",
          padding: "10px 20px",
          borderRadius: 0,
          fontFamily: '"Antic Didone", serif',
          textTransform: "none",
          boxShadow: "none",
          mt: 10,
          "&:hover": {
            boxShadow: "none",
          },
        }}
      >
        Gå vidare till inbjudan
      </Button>


    </Box>
  );
}

export default CountdownTimer;
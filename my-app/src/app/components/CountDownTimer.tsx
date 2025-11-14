"use client";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

type TimeBlockProps = {
  value: number | string;
  label: string;
};

function TimeBlock({ value, label }: TimeBlockProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: 140,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: '"Italiana", sans-serif',
          fontSize: { xs: "6rem", sm: "5rem" },
          lineHeight: 1,
        }}
      >
        {value}
      </Typography>

      <Typography
        variant="subtitle2"
        sx={{
          fontFamily: '"Antic Didone", serif',
          fontSize: "0.8rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          alignSelf: "flex-end",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

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

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getTimeRemaining();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#cbc4ba",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {days > 0 && (
          <TimeBlock
            value={days}
            label="DAGAR"
          />
        )}

        {hours > 0 && (
          <TimeBlock
            value={hours.toString().padStart(2, "0")}
            label="TIMMAR"
          />
        )}

        <TimeBlock
          value={minutes.toString().padStart(2, "0")}
          label="MINUTER"
        />

        <TimeBlock
          value={seconds.toString().padStart(2, "0")}
          label="SEKUNDER"
        />
      </Box>

      <Button
        onClick={() => router.push("/start")}
        variant="contained"
        disableRipple
        sx={{
          mt: 8,
          backgroundColor: "#000",
          color: "#fff",
          padding: "10px 40px",
          width: "200px",
          borderRadius: 0,
          fontFamily: '"Antic Didone", serif',
          textTransform: "none",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#111",
            boxShadow: "none",
          },
        }}
      >
        Fortsätt
      </Button>
    </Box>
  );
}


export default CountdownTimer;

"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import CountdownTimer from "./components/CountDownTimer";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <CountdownTimer />
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
          "&:hover": {
            boxShadow: "none",
          },
        }}
      >
        Gå vidare till inbjudan
      </Button>
    </>
  );
}

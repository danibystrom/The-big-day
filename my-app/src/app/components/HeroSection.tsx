'use client';
import { Box } from "@mui/material";
import CountdownTimer from "./CountDownTimer";

export default function HeroSection() {
    return (
        <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundImage: "url(/coupleimg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
            {/* <h1>Hej</h1> */}
            <CountdownTimer />
        </Box>
    )
}
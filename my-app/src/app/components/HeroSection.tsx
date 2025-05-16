'use client';
import { Box, Typography } from "@mui/material";
import CountdownTimer from "./CountDownTimer";

export default function HeroSection() {
    return (
        <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundImage: "url(/coupleimg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
            <Typography
                variant="h1"
                sx={{ fontFamily: '"Italiana", sans-serif' }}
            >
                SEE YOU THERE
            </Typography>

            <CountdownTimer />
        </Box>
    )
}
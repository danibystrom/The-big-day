'use client';
import { Box, Typography } from "@mui/material";
import CountdownTimer from "./CountDownTimer";

export default function HeroSection() {
    return (
        <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundImage: "url(/herobw.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
            <Typography
                variant="h1"
                sx={{ fontFamily: '"Italiana", sans-serif', textAlign: "center", lineHeight: 1, marginBottom: 2 }}
            >
                SAVE THE DATE
            </Typography>
            <Typography
                variant="h6"
                sx={{ fontFamily: '"Antic Didone", serif' }}
            >
                28 augusti 14.00 | Villa Strömfors 1, Svenljunga
            </Typography>
            <CountdownTimer />
        </Box>
    )
}
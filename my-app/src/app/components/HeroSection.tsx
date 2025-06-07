'use client';
import { Box, Typography } from "@mui/material";

export default function HeroSection() {
    return (
        <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundImage: "url(/coupleimg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
            <Typography
                variant="h1"
                sx={{ fontFamily: '"Italiana", sans-serif', textAlign: "center", lineHeight: 1, marginBottom: 4 }}
            >
                SAVE THE DATE
            </Typography>
            <Typography
                variant="h6"
                sx={{ fontFamily: '"Antic Didone", serif', fontWeight: 100, }}
            >
                28 augusti 14.00 | Villa Strömfors 1, Svenljunga
            </Typography>
            {/* <CountdownTimer /> */}
        </Box>
    )
}
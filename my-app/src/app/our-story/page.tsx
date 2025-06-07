'use client';
import { Box, Typography } from "@mui/material";
import SplitSection from "../components/SplitSection";

export default function OurStorySection() {
    return (
        <Box>
            <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundImage: "url(/coupleimg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
                <Typography
                    variant="h1"
                    sx={{ fontFamily: '"Italiana", sans-serif', textAlign: "center", lineHeight: 1, marginBottom: 4 }}
                >
                    VÅR HISTORIA
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ fontFamily: '"Antic Didone", serif' }}
                >
                    28 augusti 14.00 | Villa Strömfors 1, Svenljunga
                </Typography>
            </Box>
            <SplitSection />
        </Box>
    )
}
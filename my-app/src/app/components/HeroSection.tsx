'use client';
import { Box, Typography } from "@mui/material";

export default function HeroSection() {

    return (
        <Box
            sx={{
                height: "90vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: "url(/coupleimg.jpg)",
                backgroundSize: "cover",
                overlayColor: "rgba(0, 0, 0, 0.5)",
                backgroundPosition: { xs: "center 30%", sm: "center" },
                textAlign: "center",
                paddingX: { xs: 2, sm: 4 },
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontFamily: '"Italiana", sans-serif',
                    textAlign: "center",
                    color: "#fff",
                    lineHeight: 1,
                    marginBottom: 2,
                    fontSize: { xs: '4.4rem', sm: '5rem' },
                }}
            >
                WE'RE GETTING MARRIED
            </Typography>

            <Typography
                variant="h6"
                sx={{
                    fontFamily: '"Antic Didone", serif',
                    color: "#fff",
                    fontSize: { xs: '1.1rem', sm: '1.5rem' }
                }}
            >
                22 Augusti 2026 kl. 14.00 | Villa Strömsfors 1, Svenljunga
            </Typography>
        </Box>
    );
}
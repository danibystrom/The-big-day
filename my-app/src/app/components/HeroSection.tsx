'use client';
import { Box, Typography } from "@mui/material";
import {
  heroMainTitleSx,
  heroSubtitleSx,
  heroViewportContainerSx,
} from "./heroLayout";

export default function HeroSection() {
  return (
    <Box
      sx={{
        ...heroViewportContainerSx,
        position: "relative",
        backgroundImage: {
          xs: "url(/start-hero-mobile.webp)",
          md: "url(/start-hero-desktop.webp)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.38) 0%, rgba(0, 0, 0, 0.48) 100%)",
          pointerEvents: "none",
          zIndex: 0,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography variant="h1" sx={{ ...heroMainTitleSx, marginBottom: 2 }}>
          {"WE'RE GETTING MARRIED"}
        </Typography>

        <Typography variant="h6" sx={heroSubtitleSx}>
          22 Augusti 2026 kl. 14.00 | Villa Strömsfors 1, Svenljunga
        </Typography>
      </Box>
    </Box>
  );
}
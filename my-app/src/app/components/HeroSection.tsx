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
        backgroundImage: "url(/coupleimg.jpg)",
      }}
    >
      <Typography variant="h1" sx={{ ...heroMainTitleSx, marginBottom: 2 }}>
        WE'RE GETTING MARRIED
      </Typography>

      <Typography variant="h6" sx={heroSubtitleSx}>
        22 Augusti 2026 kl. 14.00 | Villa Strömsfors 1, Svenljunga
      </Typography>
    </Box>
  );
}
import type { SxProps, Theme } from "@mui/material/styles";

/** Delad 100vh-hero: samma som HeroSection (centrering, padding, bakgrundsposition på mobil). */
export const heroViewportContainerSx: SxProps<Theme> = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundSize: "cover",
  backgroundPosition: { xs: "center 30%", sm: "center" },
  textAlign: "center",
  paddingX: { xs: 2, sm: 4 },
};

/** Startsida h1 — storlekar du redan gillar på mobil. */
export const heroMainTitleSx: SxProps<Theme> = {
  fontFamily: '"Italiana", sans-serif',
  fontWeight: 400,
  textAlign: "center",
  color: "#fff",
  lineHeight: 1,
  fontSize: { xs: "4.4rem", sm: "5rem" },
};

/** Undersidor: samma skala + versaler, läsbarhet mot foto. */
export const subpageHeroTitleSx: SxProps<Theme> = {
  ...heroMainTitleSx,
  marginBottom: 0,
  maxWidth: "min(92vw, 900px)",
  textShadow: "0 2px 24px rgba(0,0,0,0.45)",
  textTransform: "uppercase",
  wordBreak: "break-word",
};

export const heroSubtitleSx: SxProps<Theme> = {
  fontFamily: '"Antic Didone", serif',
  color: "#fff",
  fontSize: { xs: "1.1rem", sm: "1.5rem" },
};

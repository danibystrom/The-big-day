"use client";

import { Box, Grid, Typography } from "@mui/material";
import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material/styles";

/** Gemensam maxbredd/centering för textsidor (välkomsttext + TextSplitBand m.m.) */
export const textPageColumnSx: SxProps<Theme> = {
  width: "100%",
  maxWidth: "min(90vw, 1040px)",
  mx: "auto",
  px: { xs: 0, sm: 1 },
};

const titleSx = {
  fontFamily: '"Italiana", sans-serif',
  fontWeight: 400,
  color: "#1C1A18",
  letterSpacing: "0.06em",
  lineHeight: 1.08,
  textTransform: "uppercase" as const,
  fontSize: { xs: "1.35rem", sm: "1.65rem", md: "1.85rem" },
};

const contentSx = {
  fontFamily: '"Antic Didone", serif',
  fontWeight: 400,
  color: "#1C1A18",
  fontSize: { xs: "1rem", sm: "1.0625rem" },
  lineHeight: 1.75,
  "& p": { margin: 0, marginBottom: "1.25rem" },
  "& p:last-child": { marginBottom: 0 },
};

export type TextSplitBandProps = {
  title: string;
  /** "left" = rubrik vänsterkolumn, brödtext höger (som din inspo-bild) */
  headPosition: "left" | "right";
  children: ReactNode;
};

/**
 * Tvåkolumns textsektion utan bild — luftig modul, inte full viewport-höjd.
 */
export default function TextSplitBand({
  title,
  headPosition,
  children,
}: TextSplitBandProps) {
  const titleBlock = (
    <Grid item xs={12} md={5}>
      <Typography component="h3" variant="h4" sx={titleSx}>
        {title}
      </Typography>
    </Grid>
  );

  const bodyBlock = (
    <Grid item xs={12} md={7}>
      <Box sx={contentSx}>{children}</Box>
    </Grid>
  );

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 5, md: 7 },
      }}
    >
      <Grid
        container
        columnSpacing={{ xs: 0, md: 6 }}
        rowSpacing={{ xs: 3, md: 0 }}
        alignItems="flex-start"
      >
        {headPosition === "left" ? (
          <>
            {titleBlock}
            {bodyBlock}
          </>
        ) : (
          <>
            <Grid
              item
              xs={12}
              md={7}
              sx={{ order: { xs: 2, md: 1 } }}
            >
              <Box sx={contentSx}>{children}</Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                order: { xs: 1, md: 2 },
                textAlign: { xs: "left", md: "right" },
              }}
            >
              <Typography component="h3" variant="h4" sx={titleSx}>
                {title}
              </Typography>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
}

"use client";

import { Box, Grid, Typography } from "@mui/material";
import { Children, type ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";
import type { SxProps, Theme } from "@mui/material/styles";

/** Gemensam maxbredd/centering för textsidor (välkomsttext + TextSplitBand m.m.) */
export const textPageColumnSx: SxProps<Theme> = {
  width: "100%",
  maxWidth: "min(90vw, 1040px)",
  mx: "auto",
  px: { xs: 0, sm: 1 },
};

/** Versalerubrik som i band-sektioner (t.ex. «VÅR VISION») — återanvänds utanför komponenten */
export const textSplitBandUppercaseTitleSx = {
  fontFamily: '"Italiana", sans-serif',
  fontWeight: 400,
  color: "#1C1A18",
  letterSpacing: "0.06em",
  lineHeight: 1.08,
  textTransform: "uppercase" as const,
  fontSize: { xs: "1.35rem", sm: "1.65rem", md: "1.85rem" },
};

const titleSxSentence = {
  fontFamily: '"Italiana", sans-serif',
  fontWeight: 400,
  color: "#1C1A18",
  letterSpacing: "0.02em",
  lineHeight: 1.15,
  textTransform: "none" as const,
  fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.55rem" },
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
  uppercaseTitle?: boolean;
};

/**
 * Tvåkolumns textsektion utan bild — luftig modul, inte full viewport-höjd.
 */
export default function TextSplitBand({
  title,
  headPosition,
  children,
  uppercaseTitle = true,
}: TextSplitBandProps) {
  const titleSx = uppercaseTitle
    ? textSplitBandUppercaseTitleSx
    : titleSxSentence;

  const bodyStaggered = (
    <Box sx={contentSx}>
      {Children.map(children, (child, i) => {
        if (child === null || child === undefined || child === false) {
          return null;
        }
        return (
          <ScrollReveal key={`split-body-${i}`} delay={0.12 + i * 0.11}>
            {child}
          </ScrollReveal>
        );
      })}
    </Box>
  );

  const titleBlock = (
    <Grid item xs={12} md={5}>
      <ScrollReveal delay={0}>
        <Typography component="h3" variant="h4" sx={titleSx}>
          {title}
        </Typography>
      </ScrollReveal>
    </Grid>
  );

  const bodyBlock = (
    <Grid item xs={12} md={7}>
      {bodyStaggered}
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
              {bodyStaggered}
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
              <ScrollReveal delay={0}>
                <Typography component="h3" variant="h4" sx={titleSx}>
                  {title}
                </Typography>
              </ScrollReveal>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
}

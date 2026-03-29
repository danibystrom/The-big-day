"use client";

import { Button } from "@mui/material";
import Link from "next/link";

type BackgroundTone = "light" | "dark";
type StyleVariant = "filled" | "outlined";

/** Standard: 80 % mobil och tablet (under MUI `md`), 50 % desktop (`md` och upp). */
const defaultResponsiveWidth = {
  xs: "80%",
  sm: "80%",
  md: "50%",
} as const;

type WeddingButtonWidth =
  | string
  | number
  | {
      xs?: string | number;
      sm?: string | number;
      md?: string | number;
      lg?: string | number;
    };

interface WeddingButtonProps {
  text: string;
  /** När den saknas: vanlig knapp (t.ex. `type="submit"` i formulär). */
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  background: BackgroundTone;
  variant?: StyleVariant;
  /** Utelämnad = responsiv (80 % t.o.m. sm, 50 % från md). */
  width?: WeddingButtonWidth;
}

const DARK = "#1C1A18";
const LIGHT = "#F2EDE4";

function variantStyles(
  isDarkBg: boolean,
  v: StyleVariant
): {
  backgroundColor: string;
  color: string;
  border: string;
} {
  if (isDarkBg) {
    return v === "filled"
      ? {
          backgroundColor: LIGHT,
          color: DARK,
          border: "1px solid transparent",
        }
      : {
          backgroundColor: "transparent",
          color: LIGHT,
          border: `1px solid ${LIGHT}`,
        };
  }
  return v === "filled"
    ? {
        backgroundColor: DARK,
        color: LIGHT,
        border: "1px solid transparent",
      }
    : {
        backgroundColor: "transparent",
        color: DARK,
        border: `1px solid ${DARK}`,
      };
}

export default function WeddingButton({
  text,
  href,
  type = "submit",
  disabled = false,
  background,
  variant = "filled",
  width,
}: WeddingButtonProps) {
  const isDarkBg = background === "dark";
  const styles = variantStyles(isDarkBg, variant);
  const hoverStyles = variantStyles(
    isDarkBg,
    variant === "filled" ? "outlined" : "filled"
  );

  const hoverSx = {
    boxShadow: "none",
    ...hoverStyles,
  };

  const sx = {
    width: width ?? defaultResponsiveWidth,
    borderRadius: 0,
    fontFamily: '"Antic Didone", serif',
    textTransform: "uppercase",
    padding: "10px 20px",
    boxShadow: "none",
    ...styles,
    ...(href
      ? { "&:hover": hoverSx }
      : {
          "&:hover:not(:disabled)": hoverSx,
          "&:disabled": {
            opacity: 0.55,
            color: LIGHT,
          },
        }),
  } as const;

  if (href) {
    return (
      <Button
        component={Link}
        href={href}
        disableRipple
        sx={sx}
      >
        {text}
      </Button>
    );
  }

  return (
    <Button type={type} disabled={disabled} disableRipple sx={sx}>
      {text}
    </Button>
  );
}

"use client";

import { Button } from "@mui/material";
import Link from "next/link";

type BackgroundTone = "light" | "dark";
type StyleVariant = "filled" | "outlined";

interface WeddingButtonProps {
  text: string;
  /** När den saknas: vanlig knapp (t.ex. `type="submit"` i formulär). */
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  background: BackgroundTone;
  variant?: StyleVariant;
  width?: string | number;
}

const DARK = "#1C1A18";
const LIGHT = "#F2EDE4";

export default function WeddingButton({
  text,
  href,
  type = "submit",
  disabled = false,
  background,
  variant = "filled",
  width = "50%",
}: WeddingButtonProps) {
  const isDarkBg = background === "dark";

  const styles =
    isDarkBg
      ? variant === "filled"
        ? {
            backgroundColor: LIGHT,
            color: DARK,
            border: "none",
          }
        : {
            backgroundColor: "transparent",
            color: LIGHT,
            border: `1px solid ${LIGHT}`,
          }
      : variant === "filled"
        ? {
            backgroundColor: DARK,
            color: LIGHT,
            border: "none",
          }
        : {
            backgroundColor: "transparent",
            color: DARK,
            border: `1px solid ${DARK}`,
          };

  const sx = {
    width,
    borderRadius: 0,
    fontFamily: '"Antic Didone", serif',
    textTransform: "uppercase",
    padding: "10px 20px",
    boxShadow: "none",
    ...styles,
    ...(href
      ? {
          "&:hover": {
            boxShadow: "none",
            backgroundColor: styles.backgroundColor,
          },
        }
      : {
          "&:hover:not(:disabled)": {
            boxShadow: "none",
            filter: "brightness(0.94)",
          },
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

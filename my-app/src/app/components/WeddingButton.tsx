"use client";

import { Button } from "@mui/material";
import Link from "next/link";

type BackgroundTone = "light" | "dark";
type StyleVariant = "filled" | "outlined";

interface WeddingButtonProps {
  text: string;
  href: string;
  background: BackgroundTone;
  variant?: StyleVariant;
  width?: string | number;
}

const DARK = "#1C1A18";
const LIGHT = "#F2EDE4";

export default function WeddingButton({
  text,
  href,
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

  return (
    <Button
      component={Link}
      href={href}
      disableRipple
      sx={{
        width,
        borderRadius: 0,
        fontFamily: '"Antic Didone", serif',
        textTransform: "none",
        padding: "10px 20px",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
          backgroundColor: styles.backgroundColor,
        },
        ...styles,
      }}
    >
      {text}
    </Button>
  );
}


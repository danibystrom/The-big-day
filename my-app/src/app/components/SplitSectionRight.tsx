"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import WeddingButton from "./WeddingButton";

interface SectionProps {
    title: string;
    text: string;
    text2?: string;
    imageSrc: string;
    imageAlt?: string;
    buttonText: string;
    buttonHref: string;
    buttonStyle?: "filled" | "outlined";

    bgColor?: "#F2EDE4" | "#1C1A18";
}

/* This component displays a split section with the image on the right and text on the left. */
export default function SplitSectionRight({
    title,
    text,
    text2,
    imageSrc,
    imageAlt,
    buttonText,
    buttonHref,
    buttonStyle,
    bgColor = "#1C1A18",
}: SectionProps) {
    const isDark = bgColor === "#1C1A18";
    const textColor = isDark ? "#fff" : "#1C1A18"; 
    const resolvedButtonStyle = buttonStyle ?? (isDark ? "outlined" : "filled");

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Grid container sx={{ height: { xs: "auto", md: "100vh" } }}>

                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        color: textColor,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "40px",
                        backgroundColor: bgColor,
                        height: "100%",
                    }}
                >
                    <Typography variant="h3" sx={{ fontFamily: '"Italiana", sans-serif', marginBottom: 6, fontWeight: 400 }}>
                        {title}
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: '"Antic Didone", serif', marginBottom: 2 }}>
                        {text}
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: '"Antic Didone", serif', marginBottom: 8 }}>
                        {text2}
                    </Typography>
                    <WeddingButton
                        text={buttonText}
                        href={buttonHref}
                        background={isDark ? "dark" : "light"}
                        variant={resolvedButtonStyle}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ position: "relative", height: { xs: "50vh", md: "100vh" } }}
                >
                    <Image
                        src={imageSrc}
                        alt={imageAlt ?? ""}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: "cover" }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
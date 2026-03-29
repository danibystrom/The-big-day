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
    /** Döljer bildkolumnen under `md` (t.ex. efter HeroSection för att undvika dubbel bild). */
    hideImageOnMobile?: boolean;
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
    hideImageOnMobile = false,
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
                {/* Under md: order 2 så text hamnar under bilden (bild order 1). Desktop: order 0 = källordning, text vänster. */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        order: hideImageOnMobile ? { xs: 0, md: 0 } : { xs: 2, md: 0 },
                        color: textColor,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: { xs: "28px 24px", md: "40px 28px" },
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
                    sx={{
                        order: { xs: 1, md: 0 },
                        display: hideImageOnMobile ? { xs: "none", md: "block" } : undefined,
                        position: "relative",
                        height: { xs: "50vh", md: "100vh" },
                    }}
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
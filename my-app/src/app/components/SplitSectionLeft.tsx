"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
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

/* This component displays a split section with the image on the left and text on the right. */
export default function SplitSectionLeft({
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
                /* Mobil: bara innehållets höjd — annars fylls utfälld 100vh med “tomrum” och body-bakgrund syns mellan sektioner. */
                minHeight: { xs: "auto", md: "100vh" },
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Grid container sx={{ height: { xs: "auto", md: "100vh" } }}>
                {/* Under md: bild först (order 1), text under (order 2). Desktop: sida vid sida, bild vänster. */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        order: { xs: 1, md: 0 },
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
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        order: { xs: 2, md: 0 },
                        color: textColor,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: { xs: "28px 24px", md: "40px 28px" },
                        backgroundColor: bgColor,
                        height: "100%",
                    }}
                >
                    <ScrollReveal delay={0}>
                        <Typography variant="h3" sx={{ fontFamily: '"Italiana", sans-serif', marginBottom: 6, fontWeight: 400 }}>
                            {title}
                        </Typography>
                    </ScrollReveal>
                    <ScrollReveal delay={0.12}>
                        <Typography variant="body1" sx={{ fontFamily: '"Antic Didone", serif', marginBottom: 2 }}>
                            {text}
                        </Typography>
                    </ScrollReveal>
                    {text2 ? (
                        <ScrollReveal delay={0.24}>
                            <Typography variant="body1" sx={{ fontFamily: '"Antic Didone", serif', marginBottom: 8 }}>
                                {text2}
                            </Typography>
                        </ScrollReveal>
                    ) : null}
                    <ScrollReveal delay={text2 ? 0.36 : 0.24}>
                        <WeddingButton
                            text={buttonText}
                            href={buttonHref}
                            background={isDark ? "dark" : "light"}
                            variant={resolvedButtonStyle}
                        />
                    </ScrollReveal>
                </Grid>

            </Grid>
        </Box>
    );
}
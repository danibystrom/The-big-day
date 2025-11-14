"use client";
import { Box, Button, Grid, Link, Typography } from "@mui/material";

interface SectionProps {
    title: string;
    text: string;
    text2?: string;
    imageSrc: string;
    imageAlt?: string;
    buttonText: string;
    buttonHref: string;
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
}: SectionProps) {
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
                        color: "#000",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "40px",
                        backgroundColor: "#cbc4ba",
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
                    <Button
                        component={Link}
                        href={buttonHref}
                        variant="outlined"
                        disableRipple
                        sx={{
                            border: "1px solid #000",
                            color: "#000",
                            padding: "10px 20px",
                            borderRadius: 0,
                            fontFamily: '"Antic Didone", serif',
                            textTransform: "none",
                            width: "50%",
                            boxShadow: "none",
                            "&:hover": {
                                boxShadow: "none",
                            },
                        }}
                    >
                        {buttonText}
                    </Button>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: "flex", height: "100%" }}
                >
                    <Box
                        component="img"
                        src={imageSrc}
                        alt={imageAlt}
                        sx={{
                            width: "100%",
                            height: "100vh",
                            objectFit: "cover",
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
"use client";
import { Box, Button, Grid, Typography } from "@mui/material";

interface SectionProps {
    title: string;
    text: string;
    imageSrc: string;
    imageAlt?: string;
    buttonText: string;
}

export default function SplitSectionRight({
    title,
    text,
    imageSrc,
    imageAlt,
    buttonText,
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
                        color: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "40px",
                        backgroundColor: "#000",
                        height: "100%",
                    }}
                >
                    <Typography variant="h3" sx={{ fontFamily: '"Italiana", sans-serif', marginBottom: 6, fontWeight: 400 }}>
                        {title}
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: '"Antic Didone", serif', marginBottom: 8 }}>
                        {text}
                    </Typography>
                    <Button
                        variant="contained"
                        disableRipple
                        sx={{
                            backgroundColor: "#000",
                            border: "1px solid #fff",
                            color: "#fff",
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
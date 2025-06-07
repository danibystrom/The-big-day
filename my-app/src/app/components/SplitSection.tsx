"use client";
import { Box, Button, Grid, Typography } from "@mui/material";

export default function AboutSection() {
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
                        color: "#2a2a2a",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "40px",
                        backgroundColor: "#ede0d4",
                        height: "100%",
                    }}
                >
                    <Typography variant="h3" sx={{ fontFamily: '"Italiana", sans-serif', marginBottom: 6, fontWeight: 400 }}>
                        BORN IN THE HEART OF ITALY
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: '"Antic Didone", serif', marginBottom: 4 }}>
                        Ciliegia is not just a drink, its a celebration of tradition,
                        craftsmanship, and the unforgettable taste of sun-ripened cherries.
                        Our grappa is meticulously crafted from handpicked cherries,
                        capturing the essence of Italian passion in every sip.
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: '"Antic Didone", serif', marginBottom: 4 }}>
                        With a bold character and a hint of sweetness, Ciliegia is perfect
                        for those who appreciate lifes finer indulgences. Whether enjoyed
                        neat, on the rocks, or as the secret twist in your favorite
                        cocktail, our cherry grappa promises to turn any moment into a
                        vibrant Italian adventure.
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: '"Antic Didone", serif', marginBottom: 8 }}>
                        Taste the unexpected. Embrace the tradition. Dive into the world of
                        Ciliegia, where every sip tells a story, and every story leaves you
                        wanting more.
                    </Typography>
                    <Button
                        variant="contained"
                        disableRipple
                        sx={{
                            backgroundColor: "#000",
                            color: "#fff",
                            padding: "10px 20px",
                            borderRadius: 0,
                            fontFamily: '"Antic Didone", serif',
                            textTransform: "none",
                            width: "50%",
                        }}
                    >
                        Knapptext
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
                        src="https://images.unsplash.com/photo-1578664182178-7079cc6dd953?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="About image"
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
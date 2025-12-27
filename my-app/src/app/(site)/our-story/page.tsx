'use client';
import SplitSectionLeft from "@/app/components/SplitSectionLeft";
import { Box, Button, Typography } from "@mui/material";

export default function OurStorySection() {
    return (
        <Box>
            <Box
                sx={{
                    height: "90vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage: "url(/sectionimg.jpeg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontFamily: '"Italiana", sans-serif',
                        color: "#fff",
                        textAlign: "center",
                        lineHeight: 1,
                        mb: 4,
                    }}
                >
                    VÅR HISTORIA
                </Typography>
            </Box>

            <Box
                component="section"
                sx={{
                    minHeight: "90vh",
                    backgroundColor: "#cbc4ba",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: "85vw",
                        px: { xs: 3, sm: 6, md: 8 },
                        py: { xs: 6, md: 6 },
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontFamily: '"Italiana", sans-serif',
                            color: "#000",
                            textAlign: "left",
                            lineHeight: 1.05,
                            mb: 3,
                            letterSpacing: 0.5,
                        }}
                    >
                        HÄR KOMMER EN TITEL
                        <br />
                        OM HUR VI TRÄFFADES...
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: '"Antic Didone", serif',
                            color: "#1a1a1a",
                            fontSize: { xs: 16, sm: 18 },
                            lineHeight: 1.2,
                            mb: 4,
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin.
                        Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue.
                        Praesent eu accumsan metus. Donec suscipit venenatis placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin.
                        Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue.
                        Praesent eu accumsan metus. Donec suscipit venenatis placerat.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin.
                        Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue.
                        Praesent eu accumsan metus. Donec suscipit venenatis placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin.
                        Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue.
                        Praesent eu accumsan metus. Donec suscipit venenatis placerat.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin.
                        Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue.
                        Praesent eu accumsan metus. Donec suscipit venenatis placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin.
                        Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue.
                        Praesent eu accumsan metus. Donec suscipit venenatis placerat.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin.
                        Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue.
                        Praesent eu accumsan metus. Donec suscipit venenatis placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin.
                        Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue.
                        Praesent eu accumsan metus. Donec suscipit venenatis placerat.

                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#000",
                            color: "#fff",
                            borderRadius: 0,
                            px: 4,
                            py: 1.2,
                            textTransform: "none",
                            fontFamily: '"Antic Didone", serif',
                            boxShadow: "none",
                            "&:hover": { backgroundColor: "#000", boxShadow: "none" },
                        }}
                    >
                        Anmäl dig här
                    </Button>
                </Box>
            </Box>
            <SplitSectionLeft title="OM VÅRT BRÖLLOP..." text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin. Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue. Praesent eu accumsan metus. Donec suscipit venenatis placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin. Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue. Praesent eu accumsan metus. Donec suscipit venenatis placerat." imageSrc="/cheers.jpeg" buttonText="Vårt bröllop" buttonHref="/our-story" bgColor="#000" />
        </Box>

    );
}

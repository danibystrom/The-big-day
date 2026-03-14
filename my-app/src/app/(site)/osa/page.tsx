'use client';
import SplitSectionLeft from "@/app/components/SplitSectionLeft";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function OsaPage() {

    const fieldSx = {
        "& .MuiInputLabel-root": {
            fontFamily: '"Antic Didone", serif',
            color: "#000",
            letterSpacing: 0.2,
            transform: "none", 
            position: "static",
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "#000",
        },
        "& .MuiInputBase-root": {
            fontFamily: '"Antic Didone", serif',
            color: "#000",
            fontSize: { xs: 16, sm: 18 },
            paddingTop: 0,
            paddingBottom: 0,
        },
        "& .MuiInput-underline:before": {
            borderBottomColor: "#000",
            borderBottomWidth: "1px",
        },
        "& .MuiInput-underline:hover:before": {
            borderBottom: "1px solid #000",
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "1px solid #000",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#000",
            borderBottomWidth: "1px",
        },
        "& textarea": {
            padding: 0,
        },
    };


    return (
        <Box>
            <Box
                sx={{
                    height: "90vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage: "url(/osapage.jpeg)",
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
                    ANMÄL DIG TILL BRÖLLOPET
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
                        FYLL I DINA UPPGIFTER NEDAN
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: '"Italiana", sans-serif',
                            color: "#000",
                            textAlign: "left",
                            lineHeight: 1.05,
                            mb: 3,
                            letterSpacing: 0.5,
                        }}
                    >
                        OM ER INBJUDAN INNEHÅLLER TVÅ NAMN BEHÖVER VI ATT NI FYLLER I ANMÄLAN SEPARAT.
                    </Typography>


                    <Box component="form" noValidate autoComplete="off" sx={{ mt: 8 }}>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                                columnGap: { xs: 4, md: 10 },
                                rowGap: 2,
                                mb: 6,
                            }}
                        >
                            {/* Förnamn */}
                            <TextField
                                variant="standard"
                                label="Förnamn:"
                                fullWidth
                                sx={fieldSx}
                            />

                            {/* Efternamn */}
                            <TextField
                                variant="standard"
                                label="Efternamn:"
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                                sx={fieldSx}
                            />

                            {/* Epost */}
                            <TextField
                                variant="standard"
                                label="Epost:"
                                type="email"
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                                sx={fieldSx}
                            />

                            {/* Telefon */}
                            <TextField
                                variant="standard"
                                label="Telefonnummer:"
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                                sx={fieldSx}
                            />
                        </Box>

                        {/* Allergi / specialkost (full bredd) */}
                        <TextField
                            variant="standard"
                            label="Om du har någon form av allergi eller önskemål om specialkost, fyll i nedan:"
                            fullWidth
                            multiline
                            InputLabelProps={{ shrink: true }}
                            sx={{
                                ...fieldSx,
                                mb: 6,
                                "& .MuiInputBase-root": {
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                },
                                "& textarea": {
                                    padding: 0,
                                },

                            }}
                        />

                    </Box>

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

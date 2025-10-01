"use client";
import AddIcon from '@mui/icons-material/Add';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Container,
    Grid,
    Hidden,
    Link,
    Typography
} from "@mui/material";
import { usePathname } from "next/navigation";

function StyledLink({
    text,
    href,
}: {
    text: string;
    href: string;
    datacy?: string;
}) {
    // const pathname = usePathname();
    return (
        <Link
            sx={{
                textDecoration: "none",
                color: "#fff",
                letterSpacing: "-0.05em",
                fontFamily: "sans-serif, 'Futura', 'Trebuchet MS', 'Arial'",
                fontSize: "0.8rem",
                margin: "0.2rem 0",
                "&:hover": {
                    color: "gray",
                },
            }}
            href={href}
        >
            {text}
        </Link>
    );
}

export default function Footer() {
    const pathname = usePathname();
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#000",
                width: "100%",
                padding: "1rem 0",
                paddingTop: "2rem",
                // borderTop: "1px solid #e0e0e0",
            }}
        >
            <Container
                sx={{
                    minWidth: "100%",
                }}
            >
                <Grid
                    container
                    spacing={1}
                    sx={{
                        fontFamily: "Playfair Display",
                        marginTop: "2rem",
                        marginBottom: "2rem",
                        color: "#ffffff",
                    }}
                >
                    <Grid item xs={12} sm={12} md={3}>
                        <Box display="flex" justifyContent="center">
                            <Hidden mdDown>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="flex-start"
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: "100",
                                            letterSpacing: "-0.05em",
                                            fontSize: "0.8rem",
                                            paddingBottom: "0.8rem",
                                        }}
                                    >
                                        VÅR HISTORIA
                                    </Typography>
                                    <StyledLink text="Mer info kommer" href="/" />
                                    {/* <StyledLink text="Om Felicia & Sebastian" href="/" /> */}
                                    {/* <StyledLink text="Till våra gäster" href="/" /> */}
                                </Box>
                            </Hidden>
                        </Box>
                        <Hidden mdUp>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<AddIcon sx={{ fontSize: "1rem", color: "#fff" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{
                                        backgroundColor: "#000",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: "100",
                                            letterSpacing: "-0.05em",

                                            fontSize: "0.7rem",

                                            color: "#ffffff",
                                        }}
                                    >
                                        VÅR HISTORIA
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        backgroundColor: "#000",
                                    }}
                                >
                                    <StyledLink text="Mer info kommer" href="/" />
                                    {/* <StyledLink text="Om Felicia & Sebastian" href="/" /> */}
                                    {/* <StyledLink text="Till våra gäster" href="/" /> */}
                                </AccordionDetails>
                            </Accordion>
                        </Hidden>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Box display="flex" justifyContent="center">
                            <Hidden mdDown>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="flex-start"
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: "100",
                                            letterSpacing: "-0.05em",
                                            fontSize: "0.8rem",
                                            paddingBottom: "0.8rem",
                                        }}
                                    >
                                        BRÖLLOPPET
                                    </Typography>
                                    <StyledLink text="Mer info kommer" href="/" />
                                    {/* <StyledLink text="OSA" href="/" /> */}
                                    {/* <StyledLink text="Klädkod" href="/" /> */}
                                    {/* <StyledLink text="Viktig information" href="/" /> */}
                                </Box>
                            </Hidden>
                        </Box>
                        <Hidden mdUp>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<AddIcon sx={{ fontSize: "1rem", color: "#fff" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{
                                        backgroundColor: "#000",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: "100",
                                            letterSpacing: "-0.05em",

                                            fontSize: "0.7rem",

                                            color: "#ffffff",
                                        }}
                                    >
                                        BRÖLLOPPET
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",

                                        backgroundColor: "#000",
                                    }}
                                >
                                    <StyledLink text="Mer info kommer" href="/" />
                                    {/* <StyledLink text="OSA" href="/" /> */}
                                    {/* <StyledLink text="Klädkod" href="/" /> */}
                                    {/* <StyledLink text="Viktig information" href="/" /> */}
                                </AccordionDetails>
                            </Accordion>
                        </Hidden>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Box display="flex" justifyContent="center">
                            <Hidden mdDown>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="flex-start"
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: "100",
                                            letterSpacing: "-0.05em",
                                            fontSize: "0.8rem",
                                            paddingBottom: "0.8rem",
                                        }}
                                    >
                                        KONTAKT
                                    </Typography>
                                    <StyledLink text="Mer info kommer" href="/" />
                                    {/* <StyledLink text="Hör av dig" href="/" /> */}
                                    {/* <StyledLink text="Frågor & Svar" href="/" /> */}
                                </Box>
                            </Hidden>
                        </Box>
                        <Hidden mdUp>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<AddIcon sx={{ fontSize: "1rem", color: "#fff" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{
                                        backgroundColor: "#000",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: "100",
                                            letterSpacing: "-0.05em",

                                            fontSize: "0.7rem",

                                            color: "#ffffff",
                                        }}
                                    >
                                        KONTAKT
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        backgroundColor: "#000",
                                    }}
                                >
                                    <StyledLink text="Mer info kommer" href="/" />
                                    {/* <StyledLink text="Hör av dig" href="/" /> */}
                                    {/* <StyledLink text="Frågor & Svar" href="/" /> */}
                                </AccordionDetails>
                            </Accordion>
                        </Hidden>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Box display="flex" justifyContent="center">
                            <Hidden mdDown>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="flex-start"
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: "100",
                                            letterSpacing: "-0.05em",
                                            fontSize: "0.8rem",
                                            paddingBottom: "0.8rem",
                                        }}
                                    >
                                        FÖLJ OSS
                                    </Typography>
                                    <StyledLink text="@feliciarosensporre" href="/" />
                                    <StyledLink text="@sebastains.szalai" href="/" />
                                </Box>
                            </Hidden>
                        </Box>
                        <Hidden mdUp>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<AddIcon sx={{ fontSize: "1rem", color: "#fff" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{
                                        backgroundColor: "#000",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: "100",
                                            letterSpacing: "-0.05em",

                                            fontSize: "0.7rem",

                                            color: "#ffffff",
                                        }}
                                    >
                                        FÖLJ OSS
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",

                                        backgroundColor: "#000",
                                    }}
                                >
                                    <StyledLink text="@feliciarosensporre" href="/" />
                                    <StyledLink text="@sebastains.szalai" href="/" />
                                </AccordionDetails>
                            </Accordion>
                        </Hidden>
                    </Grid>
                </Grid>

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        marginTop: "1rem",
                        paddingBottom: "1rem",
                        borderBottom:
                            pathname === "/about" ? "1px solid #2a2a2a" : "1px solid #e0e0e0",
                    }}
                >
                </Box>

                <Typography
                    sx={{
                        fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                        fontWeight: "400",
                        letterSpacing: "-0.02em",
                        fontSize: "0.9rem",
                        padding: "1.5rem 0",

                        color: "#ffffff",
                    }}
                    variant="body1"
                    align="center"
                >
                    © 2025 FELICIA & SEBASTIAN
                </Typography>
            </Container>
        </Box>
    );
}
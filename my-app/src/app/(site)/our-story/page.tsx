'use client';
import SplitSectionLeft from "@/app/components/SplitSectionLeft";
import { Box, Typography } from "@mui/material";

export default function OurStorySection() {
    return (
        <Box>
            <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundImage: "url(/coupleimg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
                <Typography
                    variant="h1"
                    sx={{ fontFamily: '"Italiana", sans-serif', color: "#fff", textAlign: "center", lineHeight: 1, marginBottom: 4 }}
                >
                    VÅR HISTORIA
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ fontFamily: '"Antic Didone", serif', color: "#fff" }}
                >
                    28 augusti 14.00 | Villa Strömfors 1, Svenljunga
                </Typography>
            </Box>
            <SplitSectionLeft title="DEN SOM VÄNTAR PÅ NÅGOT GOTT..." text="Två hjärtan fann varandra, och en berättelse vi aldrig ville ta slut på började.
           En berättelse om kärlek, om skratt, om drömmar vi delar och om livet vi vill bygga tillsammans.
           Vi har skrivit många kapitel, men det största ligger framför oss. Nu vill vi säga ja till varandra med er vid vår sida, för en kärlek som växer och blomstrar i evighet.
           Vi vill redan nu skicka en kärleksfull påminnelse om att skriva in datumet i kalendern. Mer information kommer längre fram, vi längtar att få fira den största dagen i våra liv tillsammans med er, våra viktigaste som vi älskar allra mest." imageSrc="/garden.jpg" buttonText="Mer om oss" buttonHref="/our-story" />
        </Box>
    )
}
"use client";

import SplitSectionLeft from "@/app/components/SplitSectionLeft";
import SplitSectionRight from "@/app/components/SplitSectionRight";
import {
  textPageColumnSx,
  textSplitBandUppercaseTitleSx,
} from "@/app/components/TextSplitBand";
import { Box, Link, Typography } from "@mui/material";

const body = {
  fontFamily: '"Antic Didone", serif',
  fontWeight: 400,
  color: "#1C1A18",
  fontSize: { xs: "1rem", sm: "1.0625rem" },
  lineHeight: 1.65,
};

const chapterHeadingSx = {
  ...textSplitBandUppercaseTitleSx,
  mt: 4,
  mb: 1,
};

const linkSx = {
  color: "#1C1A18",
  fontWeight: 500,
  fontFamily: '"Antic Didone", serif',
  textUnderlineOffset: "0.2em",
} as const;

const SPLIT_TEXT =
  "Schema, kapitel och tider — allt samlat så att du kan komma förberedd och bara vara närvarande.";

const SPLIT_TEXT2 =
  "Hur du tar dig hit, bor nära och packar smart — praktiskt samlat inför helgen.";

function BraAttVetaContent() {
  return (
    <Box component="article">
      <Typography component="h3" variant="h4" sx={{ ...chapterHeadingSx, mt: 0 }}>
        Mat & dryck
      </Typography>
      <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
        Vi kommer att servera en noggrant utvald meny under lördagen.
      </Typography>
      <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
        Har du allergier eller särskilda kostpreferenser? Ange detta i samband
        med{" "}
        <Link href="/osa" underline="hover" sx={linkSx}>
          OSA
        </Link>
        .
      </Typography>
      <Typography component="p" variant="body1" sx={{ ...body, mb: 3 }}>
        Dryck kommer att kunna köpas under hela kvällen fram till kl 01.00 från
        baren.
      </Typography>

      <Typography component="h3" variant="h4" sx={chapterHeadingSx}>
        Barn & sällskap
      </Typography>
      <Typography component="p" variant="body1" sx={{ ...body, mb: 3 }}>
        Denna helg är tillägnad de vuxna. Vi hoppas att ni ser det som en
        möjlighet att klä upp er, andas ut och vara fullt närvarande.
      </Typography>

      <Typography component="h3" variant="h4" sx={chapterHeadingSx}>
        Gåvor
      </Typography>
      <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
        Er närvaro på vår bröllopsdag är den största gåvan.
      </Typography>
      <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
        För den som ändå önskar ge något uppskattar vi ett bidrag till vår
        bröllopsresa.
      </Typography>
      <Typography component="p" variant="body1" sx={{ ...body, mb: 0.5 }}>
        <Box component="span" sx={{ fontWeight: 600 }}>
          Swish:
        </Box>{" "}
        076 – 165 16 46
      </Typography>
      <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
        Märk gärna betalningen med ”Bröllopsresa”.
      </Typography>
      <Typography component="p" variant="body1" sx={{ ...body, mb: 3 }}>
        Men viktigast av allt. Kom. Klä er i svart. Fira kärleken med oss.
      </Typography>

      <Typography component="h3" variant="h4" sx={chapterHeadingSx}>
        Väder & atmosfär
      </Typography>
      <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
        Vi planerar för en ceremoni utomhus. Skulle vädret vilja annat har vi en
        lika vacker plan B.
      </Typography>
      <Typography component="p" variant="body1" sx={{ ...body, mb: 0 }}>
        Oavsett väder lovar vi en atmosfär som är varm, intim och oförglömlig.
      </Typography>
    </Box>
  );
}

export default function BraAttVetaPage() {
  return (
    <Box>
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:
            "linear-gradient(to bottom, rgba(28, 26, 24, 0.62) 0%, rgba(28, 26, 24, 0.18) 20%, transparent 42%), url(/Tezza-7683.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          paddingX: { xs: 2, sm: 4 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Italiana", sans-serif',
            fontWeight: 400,
            color: "#fff",
            textAlign: "center",
            lineHeight: { xs: 1.12, sm: 1.08 },
            maxWidth: "min(90vw, 900px)",
            textShadow: "0 2px 24px rgba(0,0,0,0.45)",
            textTransform: "uppercase",
          }}
        >
          BRA ATT VETA
        </Typography>
      </Box>

      <Box
        component="section"
        sx={{
          minHeight: "auto",
          backgroundColor: "#F2EDE4",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            ...textPageColumnSx,
            py: { xs: 6, md: 6 },
          }}
        >
          <BraAttVetaContent />
        </Box>
      </Box>

      <SplitSectionLeft
        title="HELGENS PROGRAM"
        text={SPLIT_TEXT}
        imageSrc="/bubbel-torn.jpeg"
        imageAlt="Helgens program"
        buttonText="Se helgens program"
        buttonHref="/brollopet/helgens-program"
        bgColor="#1C1A18"
        buttonStyle="outlined"
      />
      <SplitSectionRight
        title="RESA & ANKOMST"
        text={SPLIT_TEXT2}
        imageSrc="/Tezza-8542.jpg"
        imageAlt="Resa och ankomst"
        buttonText="Läs mer om resa & ankomst"
        buttonHref="/brollopet/resa-ankomst"
        bgColor="#F2EDE4"
        buttonStyle="outlined"
      />
    </Box>
  );
}

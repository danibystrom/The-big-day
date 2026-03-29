"use client";

import {
  heroViewportContainerSx,
  subpageHeroTitleSx,
} from "@/app/components/heroLayout";
import { StaggerReveal } from "@/app/components/ScrollReveal";
import SplitSectionLeft from "@/app/components/SplitSectionLeft";
import SplitSectionRight from "@/app/components/SplitSectionRight";
import {
  textPageColumnSx,
  textSplitBandUppercaseTitleSx,
} from "@/app/components/TextSplitBand";
import { Box, Typography } from "@mui/material";

const body = {
  fontFamily: '"Antic Didone", serif',
  fontWeight: 400,
  color: "#1C1A18",
  fontSize: { xs: "1rem", sm: "1.0625rem" },
  lineHeight: 1.65,
};

const listSx = {
  ...body,
  pl: { xs: 2.5, sm: 3 },
  m: 0,
  mb: 2,
  "& li": {
    marginBottom: "0.65rem",
    paddingLeft: "0.25rem",
  },
  "& li::marker": {
    color: "#1C1A18",
  },
};

/** Samma som band-rubriker («VÅR VISION») */
const chapterHeadingSx = {
  ...textSplitBandUppercaseTitleSx,
  mt: 4,
  mb: 1,
};

const introTitleSx = {
  fontFamily: '"Italiana", sans-serif',
  fontWeight: 400,
  color: "#1C1A18",
  marginBottom: 3,
  marginTop: 3,
  letterSpacing: 0.5,
  lineHeight: 1.05,
  textTransform: "uppercase",
};

const SPLIT_TEXT =
  "Två hjärtan fann varandra, och en berättelse ingen av oss ville ta slut på började. Nu skriver vi det största kapitlet av dem alla, och vi vill skriva det med er vid vår sida. Den här sidan är vår lilla hörna för er. Här hittar ni allt ni behöver veta inför den stora dagen.";

const SPLIT_TEXT2 =
  "Er närvaro är allt vi önskar oss. OSA senast den 30 april 2026 här på hemsidan, och ange gärna eventuella allergier eller kostpreferenser så att vi kan ta hand om er på bästa sätt.";

function ResaAnkomstContent() {
  return (
    <Box component="article">
      <StaggerReveal stepDelay={0.09}>
      <Typography variant="h3" component="h2" sx={introTitleSx}>
        In i vår värld
      </Typography>
      <Typography component="p" variant="body1" sx={{ ...body, mb: 2, mt: 0 }}>
        Det är en resa. Inte bara geografiskt utan in i vår värld.  För er som reser längre rekommenderar vi att ni anländer till ert boende
        i god tid innan vigseln. Ge er själva utrymme att landa, byta om, andas
        in platsen.
      </Typography>

      <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
        <Box component="span" sx={{ fontWeight: 600 }}>
          Transport till boende/vigselplats:
        </Box>{" "}
        Vi undersöker just nu möjligheten att anordna buss från Heden till Villa Strömsfors på lördag. För att kunna säkerställa detta behöver vi veta hur många som är intresserade. Bocka i transportalternativet i samband med din OSA så återkommer vi med mer information. Transport fredag och söndag ordnar du själv.
      </Typography>
      <Typography component="p" variant="body1" sx={{ ...body, mb: 3 }}>
        Om ni önskar samåka eller dela transport, hör av er till brudparet för
        stöttning. Kärlek är fint. Logistik är ännu finare.
      </Typography>

      <Typography component="h3" variant="h4" sx={chapterHeadingSx}>
        Boende
      </Typography>
      <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
        Vi älskar tanken på att alla bor så nära varandra som möjligt den här
        helgen. Som en tillfällig liten värld skapad bara för oss.
      </Typography>
      <Typography component="p" variant="body1" sx={{ ...body, mb: 3 }}>
        Vi har en bokningskod på Quality Grand Hotel i Borås som ger 15% rabatt
        per rum. Koden är{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          Bröllop15
        </Box>
        .
      </Typography>

      <Typography component="h3" variant="h4" sx={chapterHeadingSx}>
        Packlista (i all elegans)
      </Typography>
      <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
        För att göra helgen så smidig som möjligt:
      </Typography>
      <Box
        component="ul"
        sx={{
          ...listSx,
          listStyleType: "disc",
        }}
      >
        <Typography component="li" variant="body1" sx={body}>
          Helvit outfit till fredagens välkomstkväll (gäller för dig som bor i
          Villa Strömsfors som familjemedlem eller brudtärna/marsalk)
        </Typography>
        <Typography component="li" variant="body1" sx={body}>
          Helsvart, elegant outfit till lördagens vigsel och middag
        </Typography>
        <Typography component="li" variant="body1" sx={body}>
          Bekväma skor till dansgolvet
        </Typography>
        <Typography component="li" variant="body1" sx={body}>
          Eventuell jacka/sjal om kvällen blir sval
        </Typography>
        <Typography component="li" variant="body1" sx={body}>
          Solglasögon för söndagens morgonstund
        </Typography>
        <Typography component="li" variant="body1" sx={body}>
          Badkläder om ni vill ta ett dopp i poolen
        </Typography>
      </Box>
      <Typography component="p" variant="body1" sx={{ ...body, mb: 0 }}>
        Och viktigast av allt: energi att fira kärleken.
      </Typography>
      </StaggerReveal>
    </Box>
  );
}

export default function ResaAnkomstPage() {
  return (
    <Box>
      <Box
        sx={{
          ...heroViewportContainerSx,
          backgroundImage:
            "linear-gradient(to bottom, rgba(28, 26, 24, 0.62) 0%, rgba(28, 26, 24, 0.18) 20%, transparent 42%), url(/Tezza-7243.jpg)",
        }}
      >
        <Typography variant="h1" sx={subpageHeroTitleSx}>
          RESA & ANKOMST
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
          <ResaAnkomstContent />
        </Box>
      </Box>

      <SplitSectionLeft
        title="DET HÄR ÄR VÅR BERÄTTELSE."
        text={SPLIT_TEXT}
        imageSrc="/garden.jpg"
        imageAlt="Helgens program"
        buttonText="Om bröllopet"
        buttonHref="/brollopet"
        bgColor="#1C1A18"
        buttonStyle="outlined"
      />
      <SplitSectionRight
        title="VI VILL VETA ATT NI KOMMER."
        text={SPLIT_TEXT2}
        imageSrc="/Tezza-5306.jpg"
        imageAlt="Bröllop"
        buttonText="Anmäl dig här"
        buttonHref="/osa"
        bgColor="#F2EDE4"
        buttonStyle="outlined"
      />
    </Box>
  );
}

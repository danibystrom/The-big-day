"use client";

import {
  heroViewportContainerSx,
  subpageHeroTitleSx,
} from "@/app/components/heroLayout";
import { StaggerReveal } from "@/app/components/ScrollReveal";
import SplitSectionLeft from "@/app/components/SplitSectionLeft";
import SplitSectionRight from "@/app/components/SplitSectionRight";
import TextSectionHeadLeft from "@/app/components/TextSectionHeadLeft";
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

const englishPoetic = {
  ...body,
  fontStyle: "italic" as const,
  color: "#3a3530",
  letterSpacing: 0.02,
};

/** Samma rubrik som TextSplitBand «VÅR VISION» (Italiana, versaler, storlek) */
const chapterHeadingSx = {
  ...textSplitBandUppercaseTitleSx,
  mt: 4,
  mb: 1,
};

const audienceNoteSx = {
  ...body,
  fontSize: { xs: "0.9375rem", sm: "1rem" },
  fontStyle: "italic" as const,
  color: "#4a4540",
  mb: 2,
};

const SPLIT_TEXT =
  "Vi hoppas att du vill vara en del av det här.Att du vill klä dig i svart, höja ditt glas och fira kärleken med oss. Om du vet att du kommer, eller om hjärtat redan har svarat ja, tar vi emot ditt OSA här med öppna armar.";

const SPLIT_TEXT2 =
  "Har du frågor, funderingar eller något du vill stämma av innan den stora dagen? Vi vill att du ska känna dig trygg hela vägen fram. På vår kontaktsida hittar du alla uppgifter du behöver, oavsett om det gäller logistik, tal eller något helt annat.";

const linkSx = {
  color: "#1C1A18",
  fontWeight: 500,
  fontFamily: '"Antic Didone", serif',
  textUnderlineOffset: "0.2em",
} as const;

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

function HelgensProgramContent() {
  return (
    <Box component="article">
      <StaggerReveal stepDelay={0.06}>
        <Typography variant="h3" component="h2" sx={introTitleSx}>
          From white to black
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 2, mt: 0 }}>
          Helgen utspelar sig i två kapitel. Varje dag sin egen känsla, sin egen
          klädsel och sin egen plats i berättelsen.  Vi börjar i vitt. I det lätta, det förväntansfulla, det som ännu inte
          sagts högt. Och sedan kliver vi in i svart. I löftet, festen och natten
          som aldrig riktigt vill ta slut.
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 3 }}>
          Nedan har vi samlat allt du behöver veta inför helgen, från tider och
          platser till klädkoder och praktisk information. Läs det som det är
          menat — som början på något stort.
        </Typography>

        {/* Fredag */}
        <Typography component="h3" variant="h4" sx={chapterHeadingSx}>
          Fredag, Chapter I — IN WHITE
        </Typography>
        <Typography component="p" sx={audienceNoteSx}>
          (För dig som bor i Villa Strömsfors som familjemedlem eller
          brudtärna/marsalk)
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...englishPoetic, mb: 1.5 }}>
          Before the vows. Before the black. Before forever takes its final form. We begin in white.
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
          Fredagskvällen är prologen. Förväntan i sin renaste form. Ett andetag
          innan pulsen höjs. Vi samlas klädda i vitt. Som en levande installation
          av ljus mot kvällshimlen. En kväll för att landa, skratta, skåla och låta
          förväntan byggas upp. Tänk sommar i Europa. Krispiga linneskjortor, silke
          som fångar vinden, mjuka silhuetter, klänningar som rör sig i
          kvällsbrisen.
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
          White party är en hyllning till början. Till allt som ännu inte sagts
          högt. Till nervositeten. Skrattet. Blickarna som stannar lite längre.
          Kvällen då vi landar i varandras närvaro. Dricker något kallt. Låter
          musiken svepa in oss. Känner att något stort är på väg att hända.
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
          Ikväll är vi ljuset innan mörkret blir ikoniskt.
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 0.5 }}>
          <Box component="span" sx={{ fontWeight: 600 }}>
            Tid:
          </Box>{" "}
          17.30–22.00
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 0.5 }}>
          <Box component="span" sx={{ fontWeight: 600 }}>
            Plats:
          </Box>{" "}
          Villa Strömsfors
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 3 }}>
          <Box component="span" sx={{ fontWeight: 600 }}>
            Klädsel:
          </Box>{" "}
          Helvitt, i den mån det är möjligt. Låt material och silhuett tala. Håll
          färgskalan ren.
        </Typography>

        {/* Lördag */}
        <Typography component="h3" variant="h4" sx={chapterHeadingSx}>
          Lördag, Chapter II — IN BLACK
        </Typography>
        <Typography component="p" sx={audienceNoteSx}>
          (Vi välkomnar alla gäster)
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...englishPoetic, mb: 2 }}>
          The day we choose forever.
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
          Ceremonin där vi säger ja. Middagen där vi firar. Natten där vi dansar
          tills tiden suddas ut. Detta är hjärtat av helgen. Det är här vi lovar
          varandra allt. När ljuset från fredagen lagt sig och förväntan har förvandlats till
          något större, kliver vi in i svart.
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 1 }}>
          Det är filmiskt. Det är tidlöst. Det är kompromisslöst.
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 0.5 }}>
          <Box component="span" sx={{ fontWeight: 600 }}>
            Vigsel:
          </Box>{" "}
          kl 14.00
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 0.5 }}>
          <Box component="span" sx={{ fontWeight: 600 }}>
            Mingel:
          </Box>{" "}
          kl 15.00
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 0.5 }}>
          <Box component="span" sx={{ fontWeight: 600 }}>
            Middag:
          </Box>{" "}
          kl 17.30
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
          <Box component="span" sx={{ fontWeight: 600 }}>
            Fest:
          </Box>{" "}
          kl ca 21.00 — tills vi inte längre kan stå still, dvs till kl 01.00
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...englishPoetic, mb: 3 }}>
          From white to black.
          From anticipation to promise. From a beginning to always.
        </Typography>

        {/* Söndag */}
        <Typography component="h3" variant="h4" sx={chapterHeadingSx}>
          Söndag, Chapter III — THE MORNING AFTER
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...englishPoetic, mb: 2 }}>
          When the music fades, and forever has already begun.
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
          Söndagen är inte ett avslut. Den är det första kapitlet i resten av vårt
          liv. Ljuset är mjukare nu. Skorna är av. Sminket lite utsuddat. Skjortor
          uppknäppta i halsen. Vi samlas igen. Lite tröttare, mycket lyckligare.
        </Typography>

        <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
          Kaffe i händer som fortfarande bär ringar som känns nya. Skratt som
          sitter djupare i kroppen. Samtal börjar med: ”Minns du när…”. Det finns något vackert i morgonen efter. Inget filter. Ingen koreografi.
          Bara vi. Och ni. Och känslan av att något stort faktiskt har hänt.
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>

        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
          Vi äter långsamt. Vi kramas längre. Vi dröjer oss kvar.
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...englishPoetic, mb: 2 }}>
          From light, to black, to gold morning.
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...englishPoetic, mb: 4 }}>
          And just like that, a new chapter begins.
        </Typography>
      </StaggerReveal>

      <TextSectionHeadLeft title="Praktisk information">
        <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
          <Box component="span" sx={{ fontWeight: 600 }}>
            OSA senast:
          </Box>{" "}
          30 april 2026 —{" "}
          <Link href="/osa" underline="hover" sx={linkSx}>
            här via hemsidan
          </Link>
          .
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 0 }}>
          Har ni frågor kring klädsel, allergier eller annat? Hör av er till vårt
          eminenta toastpar Jennifer Svernlöv och Maximilian Lajsic på{" "}
          <Link
            href="mailto:toastsoflove@gmail.com"
            underline="hover"
            sx={linkSx}
          >
            toastsoflove@gmail.com
          </Link>
          . Vi vill att ni ska känna er trygga, bekväma och förväntansfulla.
        </Typography>
      </TextSectionHeadLeft>
    </Box>
  );
}

export default function HelgensProgramPage() {
  return (
    <Box>
      <Box
        sx={{
          ...heroViewportContainerSx,
          backgroundImage:
            "linear-gradient(to bottom, rgba(28, 26, 24, 0.62) 0%, rgba(28, 26, 24, 0.18) 20%, transparent 42%), url(/Tezza-9263.jpg)",
        }}
      >
        <Typography variant="h1" sx={subpageHeroTitleSx}>
          HELGENS PROGRAM
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
          <HelgensProgramContent />
        </Box>
      </Box>

      <SplitSectionLeft
        title="ÄR DU MED OSS?"
        text={SPLIT_TEXT}
        imageSrc="/cheers.jpeg"
        imageAlt="Bröllop"
        buttonText="Anmäl dig här"
        buttonHref="/osa"
        bgColor="#1C1A18"
        buttonStyle="outlined"
      />
      <SplitSectionRight
        title="ALLT DU BEHÖVER VETA, OCH VEMS DU SKA FRÅGA."
        text={SPLIT_TEXT2}
        imageSrc="/Tezza-8542.jpg"
        imageAlt="Bröllop"
        buttonText="Till kontakt"
        buttonHref="/kontakt"
        bgColor="#F2EDE4"
        buttonStyle="outlined"
      />
    </Box>
  );
}

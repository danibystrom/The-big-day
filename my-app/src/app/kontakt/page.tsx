"use client";

import TextSectionHeadLeft from "@/app/components/TextSectionHeadLeft";
import { textPageColumnSx } from "@/app/components/TextSplitBand";
import { Box, Link, Typography } from "@mui/material";
import SplitSectionRight from "../components/SplitSectionRight";
import SplitSectionLeft from "../components/SplitSectionLeft";

const body = {
  fontFamily: '"Antic Didone", serif',
  fontWeight: 400,
  color: "#1C1A18",
  fontSize: { xs: "1rem", sm: "1.0625rem" },
  lineHeight: 1.75,
};

const contactLinkSx = {
  color: "#1C1A18",
  fontWeight: 500,
  fontFamily: '"Antic Didone", serif',
} as const;

const SPLIT_TEXT =
  "Från fredagens vita förväntan till lördagens svarta löfte — och vidare in i söndagens mjuka morgon efter. Det här är en helg i tre kapitel, var och ett med sin egen känsla, sin egen klädsel och sin egen plats i berättelsen. Här hittar du allt du behöver inför helgen — schema, klädkoder och praktisk information — samlat på ett ställe så att du kan komma förberedd och bara vara närvarande när det väl är dags.";

const SPLIT_TEXT2 =
  "Här hittar du allt du behöver för att ta dig dit, hitta rätt boende och packa smart inför de tre dagarna. Så att du kan lägga all din energi på det som faktiskt spelar roll när helgen väl är här.";


function KontaktContent() {
  return (
    <Box component="article">
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontFamily: '"Italiana", sans-serif',
          fontWeight: 400,
          color: "#1C1A18",
          marginBottom: 3,
          marginTop: 3,
          letterSpacing: 0.5,
          lineHeight: 1.05,
          textTransform: "uppercase",
        }}
      >
        Frågor, funderingar <br />eller en idé du bara måste dela?
      </Typography>

      <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
        Vi vill att du ska känna dig trygg och förväntansfull inför helgen — och det börjar med att du vet vart du ska vända dig.
      </Typography>

      <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
        Planerar du ett tal, vill framföra något alldeles särskilt eller har du en överraskning på gång? Hör av dig till vårt fantastiska toastpar Jennifer Svernlöv och Maximilian Lajsic på toastsoflove@gmail.com. De tar hand om dig.
      </Typography>


      <TextSectionHeadLeft title="Logistik och brudpar">
        <Typography component="p" variant="body1" sx={{ ...body, mb: 0 }}>
          För logistiska frågor kring resan, boendet eller annat praktiskt inför
          helgen är du varmt välkommen att kontakta brudparet direkt på nedan uppgifter.
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 1 }}>
          <strong>Felicia:{" "}</strong>
          <Link href="tel:+46761651646" underline="hover" sx={contactLinkSx}>
            076-165 16 46
          </Link>{" "}
          eller{" "}
          <Link
            href="mailto:felicia.rosensporre@gmail.com"
            underline="hover"
            sx={contactLinkSx}
          >
            felicia.rosensporre@gmail.com.
          </Link>
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 0 }}>
          <strong>Sebastian:{" "}</strong>
          <Link href="tel:+46722621295" underline="hover" sx={contactLinkSx}>
            072-262 12 95
          </Link>{" "}
          eller{" "}
          <Link
            href="mailto:sebastian.szalai@gmail.com"
            underline="hover"
            sx={contactLinkSx}
          >
            sebastian.szalai@gmail.com.
          </Link>
        </Typography>
      </TextSectionHeadLeft>
    </Box>
  );
}

export default function KontaktPage() {
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
            lineHeight: 1,
            marginBottom: 0,
            fontSize: { xs: "4.4rem", sm: "5rem" },
            maxWidth: "min(90vw, 900px)",
            textShadow: "0 2px 24px rgba(0,0,0,0.45)",
            textTransform: "uppercase",
          }}
        >
          KONTAKT
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
          <KontaktContent />
        </Box>
      </Box>
      <SplitSectionLeft
        title="EN HELG I TRE KAPITEL"
        text={SPLIT_TEXT}
        imageSrc="/sectionimg.jpeg"
        imageAlt="Bröllop"
        buttonText="Se helgens program"
        buttonHref="/brollopet/helgens-program"
        bgColor="#1C1A18"
        buttonStyle="outlined"
      />
      <SplitSectionRight
        title="RESA, BOENDET OCH ALLT DÄREMELLAN"
        text={SPLIT_TEXT2}
        imageSrc="/sectionimg.jpeg"
        imageAlt="Bröllop"
        buttonText="Läs mer om resa & boende"
        buttonHref="/brollopet/resa-ankomst"
        bgColor="#F2EDE4"
        buttonStyle="outlined"
      />
    </Box>
  );
}

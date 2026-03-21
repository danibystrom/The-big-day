"use client";

import SplitSectionLeft from "@/app/components/SplitSectionLeft";
import SplitSectionRight from "@/app/components/SplitSectionRight";
import TextSectionHeadLeft from "@/app/components/TextSectionHeadLeft";
import TextSectionHeadRight from "@/app/components/TextSectionHeadRight";
import { textPageColumnSx } from "@/app/components/TextSplitBand";
import { Box, Typography } from "@mui/material";

const body = {
  fontFamily: '"Antic Didone", serif',
  fontWeight: 400,
  color: "#1C1A18",
  fontSize: { xs: "1rem", sm: "1.0625rem" },
  lineHeight: 1.65,
};

const SPLIT_TEXT =
  "Från fredagens vita förväntan till lördagens svarta löfte — och vidare in i söndagens mjuka morgon efter. Det här är en helg i tre kapitel, var och ett med sin egen känsla, sin egen klädsel och sin egen plats i berättelsen. Här hittar du allt du behöver inför helgen — schema, klädkoder och praktisk information — samlat på ett ställe så att du kan komma förberedd och bara vara närvarande när det väl är dags.";

const SPLIT_TEXT2 =
  "Här hittar du allt du behöver för att ta dig dit, hitta rätt boende och packa smart inför de tre dagarna. Så att du kan lägga all din energi på det som faktiskt spelar roll när helgen väl är här.";

function BrollopetContent() {
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
        VÄLKOMNA TILL VÅRT BRÖLLOP
      </Typography>

      <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
        Det här är mer än en dag.
        <br />
        Det är en upplevelse. En känsla. Ett ögonblick vi vill sträcka ut i tiden.
      </Typography>

      <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
        Vi bjuder in er till ett bröllop där kärlek, estetik och närvaro står i
        centrum. Där varje detalj är vald med omsorg. Där mörket är kuliss och
        ljuset kommer från er, och oss.
      </Typography>

      <Typography component="p" variant="body1" sx={{ ...body, mb: 2 }}>
        Fredagens inledning blir en mer intim samling tillsammans med våra
        familjer, brudfölje och marsalkar, enligt bröllopslokalens satta
        upplägg. Då vi kommer sakna er resterande gästers närvaro så längtar vi
        desto mer till lördagen, då vi öppnar våra famnar och välkomnar er alla
        varmt att dela vigseldagen med oss. Det är då vi samlas fullt ut. Det är
        då vi säger ja till varandra.
      </Typography>

      <Typography component="p" variant="body1" sx={{ ...body, mb: 0 }}>
        Det här är början på resten av vårt liv.
        <br />
        Och vi vill börja det tillsammans med er.
      </Typography>

      <TextSectionHeadLeft title="Vår vision">
        <Typography component="p" variant="body1" sx={body}>
          Vi har alltid trott att kärlek är ett statement.
          <br />
          Att välja varandra varje dag är det mest radikala man kan göra.
        </Typography>
        <Typography component="p" variant="body1" sx={body}>
          Den här helgen är en hyllning till det löftet.
          <br />
          Till det tidlösa. Det filmiska. Det innerliga.
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 0 }}>
          Tänk klassisk elegans. Djup romantik. Vintage möter modern
          självsäkerhet.
          <br />
          En atmosfär som känns som en svartvit film, men med hjärtan som slår i
          färg.
        </Typography>
      </TextSectionHeadLeft>

      <TextSectionHeadRight title="Dresscode: all black">
        <Typography component="p" variant="body1" sx={body}>
          Vi önskar att ni klär er i helsvart, i den mån det är möjligt.
        </Typography>
        <Typography
          component="p"
          variant="body1"
          sx={{
            ...body,
            fontStyle: "italic",
            color: "#2a2622",
          }}
        >
          Svart är inte sorg hos oss.
          <br />
          Svart är styrka. Svart är elegans. Svart är en fond där kärleken får ta
          all plats.
        </Typography>
        <Typography component="p" variant="body1" sx={body}>
          Tänk smoking, svart kostym, lång svart klänning, strukturer, siden,
          sammet, spets.
          <br />
          Lek med material, silhuetter och personlighet men håll färgpaletten
          svart.
        </Typography>
        <Typography component="p" variant="body1" sx={{ ...body, mb: 0 }}>
          Tillsammans skapar vi en visuell helhet. En levande tavla. Ett
          ögonblick som känns ikoniskt.
        </Typography>
      </TextSectionHeadRight>
    </Box>
  );
}

export default function BrollopetPage() {
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
          BRÖLLOPET
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
          <BrollopetContent />
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

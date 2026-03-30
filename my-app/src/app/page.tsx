import HeroSection from "./components/HeroSection";
import SplitSectionLeft from "./components/SplitSectionLeft";
import SplitSectionRight from "./components/SplitSectionRight";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SplitSectionRight
        hideImageOnMobile
        title="DEN SOM VÄNTAR PÅ NÅGOT GOTT..."
        text="Vi har skrivit många kapitel, men det största ligger framför oss. Nu vill vi säga ja till varandra med er vid vår sida, för en kärlek som växer och blomstrar i evighet. Den här sidan är vår lilla hörna för er. Här hittar ni allt ni behöver veta inför den stora dagen. Från praktisk information till schemalagda festligheter, vi hoppas att ni känner er välkomna, förberedda och lika förväntansfulla som vi."
        // text2="Den här sidan är vår lilla hörna för er. Här hittar ni allt ni behöver veta inför den stora dagen. Från praktisk information till schemalagda festligheter, vi hoppas att ni känner er välkomna, förberedda och lika förväntansfulla som vi. Vi längtar efter att få fira livets största dag omringade av er, våra viktigaste som vi älskar allra mest."
        imageSrc="/cake.webp"
        buttonText="Mer om bröllopet"
        buttonStyle="outlined"
        buttonHref="/brollopet"
        bgColor="#F2EDE4"
      />
      <SplitSectionLeft
        title="YOUR PRESENCE IS EVERYTHING"
        text="Det enda vi ber er om är att låta oss veta att ni kommer. OSA görs enkelt här på hemsidan senast den 30 april 2026. Ange eventuella allergier eller kostpreferenser i samband med anmälan, så att vi kan ta hand om er på bästa sätt.."
        imageSrc="/Tezza-5306.webp"
        buttonText="Anmäl dig här"
        buttonStyle="outlined"
        buttonHref="/osa"
        bgColor="#F2EDE4"
      />
    </>
  );
}

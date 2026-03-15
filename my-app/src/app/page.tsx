import HeroSection from "./components/HeroSection";
import SplitSectionLeft from "./components/SplitSectionLeft";
import SplitSectionRight from "./components/SplitSectionRight";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SplitSectionRight
        title="DEN SOM VÄNTAR PÅ NÅGOT GOTT..."
        text="Två hjärtan fann varandra, och en berättelse vi aldrig ville ta slut på började.
En berättelse om kärlek, om skratt, om drömmar vi delar och om livet vi vill bygga tillsammans.
Vi har skrivit många kapitel, men det största ligger framför oss. Nu vill vi säga ja till varandra med er vid vår sida, för en kärlek som växer och blomstrar i evighet.
Vi vill redan nu skicka en kärleksfull påminnelse om att skriva in datumet i kalendern. Mer information kommer längre fram, vi längtar att få fira den största dagen i våra liv tillsammans med er, våra viktigaste som vi älskar allra mest."
        imageSrc="/garden.jpg"
        buttonText="Mer om oss"
        buttonHref="/our-story"
        bgColor="#F2EDE4"
      />
      <SplitSectionLeft
        title="OM VÅRT BRÖLLOP..."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin. Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue. Praesent eu accumsan metus. Donec suscipit venenatis placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere luctus eros sed sollicitudin. Curabitur mattis leo mauris, at pharetra lectus iaculis sollicitudin. Donec cursus commodo congue. Praesent eu accumsan metus. Donec suscipit venenatis placerat."
        imageSrc="/cheers.jpeg"
        buttonText="Vårt bröllop"
        buttonHref="/our-story"
        bgColor="#F2EDE4"
      />
    </>
  );
}

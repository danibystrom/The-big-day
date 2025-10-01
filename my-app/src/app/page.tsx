import HeroSection from "./components/HeroSection";
import SplitSection from "./components/SplitSectionRight";

export default function Home() {
  return (
    <>
      {/* <HeaderMenu /> */}
      <HeroSection />
      <SplitSection title="DEN SOM VÄNTAR PÅ NÅGOT GOTT..." text="Två hjärtan fann varandra, och en berättelse vi aldrig ville ta slut på började.
En berättelse om kärlek, om skratt, om drömmar vi delar och om livet vi vill bygga tillsammans.
Vi har skrivit många kapitel, men det största ligger framför oss. Nu vill vi säga ja till varandra med er vid vår sida, för en kärlek som växer och blomstrar i evighet.
Vi vill redan nu skicka en kärleksfull påminnelse om att skriva in datumet i kalendern. Mer information kommer längre fram, vi längtar att få fira den största dagen i våra liv tillsammans med er, våra viktigaste som vi älskar allra mest." imageSrc="/garden.jpg" buttonText="Text för knapp" />
    </>
  );
}

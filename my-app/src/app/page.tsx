import HeroSection from "./components/HeroSection";
import SplitSection from "./components/SplitSectionRight";

export default function Home() {
  return (
    <>
      {/* <HeaderMenu /> */}
      <HeroSection />
      <SplitSection title="DEN SOM VÄNTAR PÅ NÅGOT GOTT..." text="Vi hoppas att ni är lika exalterade som vi är, för nästa augusti händer det! Då vill vi fira kärleken, livet och varandra tillsammans med just er." text2="I augusti säger vi ja till varandra, och det skulle betyda allt att få dela den dagen med er. Därför vill vi redan nu skicka en kärleksfull påminnelse på att skriva in datumet i kalendern.

Mer information kommer längre fram, vi längtar!" imageSrc="/garden.jpg" buttonText="Text för knapp" />
    </>
  );
}

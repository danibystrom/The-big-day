import HeroSection from "./components/HeroSection";
import SplitSection from "./components/SplitSectionRight";

export default function Home() {
  return (
    <>
      {/* <HeaderMenu /> */}
      <HeroSection />
      <SplitSection title="Den som väntar på något gott.." text="Mer info kommer... Om du inte kan vänta och är så nyfiken att du nästan spricker feel free att höra av dig." imageSrc="/champagne.jpeg" buttonText="Text för knapp" />
    </>
  );
}
